describe('Bikes factory', function() {

  var Bikes, $q, $httpBackend;

  // hard coded bike list
  var bikeList = [
      {
      "_id": "5812c40b0c5da7c06cb1ef09",
      "buildKit": "SRAM XX1 Eagle",
      "fork": "Fox 34 Float Factory Kashima 130 Fork",
      "price": 7999,
      "year": "2017",
      "model": "5010 CC",
      "brand": "Santa Cruz",
      "__v": 0,
      "geometry": [
        {
          "_id": "5812c4fa0c5da7c06cb1ef0a",
          "soHeight": 719,
          "bbHeight": 334,
          "stAngle": 73.8,
          "htAngle": 67,
          "ttLength": 621,
          "wheelbase": 1164,
          "size": "L"
        },
        {
          "_id": "5812c5b60c5da7c06cb1ef0b",
          "soHeight": 717,
          "bbHeight": 334,
          "stAngle": 73.8,
          "htAngle": 67,
          "ttLength": 598,
          "wheelbase": 1141,
          "size": "M"
        }
      ]
    },
    {
      "_id": "3fn5",
      "buildKit": "Shimano XTR",
      "fork": "Fox 34 Talas",
      "price": 6999,
      "year": "2017",
      "model": "Stumpjumper",
      "brand": "Specialized",
      "geometry": [
        {
          "_id": "5812c4fa0c5da7c06cb1ef0a",
          "soHeight": 719,
          "bbHeight": 334,
          "stAngle": 73.8,
          "htAngle": 67,
          "ttLength": 621,
          "wheelbase": 1164,
          "size": "L"
        }
      ]
    }
  ];

  var RESPONSE_SUCCESS = {
    _id: "5812c40b0c5da7c06cb1ef09",
    buildKit: "SRAM XX1 Eagle",
    fork: "Fox 34 Float Factory Kashima 130 Fork",
    price: 7999,
    year: "2017",
    model: "5010 CC",
    brand: "Santa Cruz",
    geometry: [
      {
        _id: "5812c4fa0c5da7c06cb1ef0a",
        soHeight: 719,
        bbHeight: 334,
        stAngle: 73.8,
        htAngle: 67,
        ttLength: 621,
        wheelbase: 1164,
        size: "L"
      },
      {
        _id: "5812c5b60c5da7c06cb1ef0b",
        soHeight: 717,
        bbHeight: 334,
        stAngle: 73.8,
        htAngle: 67,
        ttLength: 598,
        wheelbase: 1141,
        size: "M"
      }
    ]
  };

  var NEW_BIKE = {
    buildKit: "Shimano XTR",
    fork: "Fox 34 Talas",
    price: 6999,
    year: "2017",
    model: "Stumpjumper",
    brand: "Specialized"
  };

  beforeEach(angular.mock.module('api.bikes'));

  beforeEach(inject(function(_Bikes_, _$q_, _$httpBackend_) {
    Bikes = _Bikes_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
  }));

  it('should exist', function() {
    expect(Bikes).toBeDefined();
  });

  describe('getAllBikes()', function() {
    var result;

    beforeEach(function() {
      result = [];

      spyOn(Bikes, "getAllBikes").and.callThrough();
    });

    it('should be defined', function() {
      expect(Bikes.getAllBikes).toBeDefined();
    });

    it('should return a hard coded set of bikes', function() {

      $httpBackend.whenGET('/get_bikes').respond(200, $q.when(bikeList));

      Bikes.getAllBikes().then(function(res) {
        result = res;
      });

      $httpBackend.flush();

      expect(result[0]).toEqual(bikeList[0]);
      expect(result.length).toEqual(2);
      expect(result[0]._id).toEqual('5812c40b0c5da7c06cb1ef09');
      expect(typeof result[0].price).toEqual('number');
      expect(result[0].geometry.length).toEqual(2);
    });
  });

  describe('getBikeById()', function() {

    var result;

    beforeEach(function() {
      result = {};

      spyOn(Bikes, "getBikeById").and.callThrough();
    });

    it('should be defined', function() {
      expect(Bikes.getBikeById).toBeDefined();
    });

    // should take a parameter of id
    it('should take an id parameter', function() {
      var id = {id: '5812c40b0c5da7c06cb1ef09'};

      $httpBackend.whenPOST('/get_bike_by_id', id).respond(200, $q.when(RESPONSE_SUCCESS));

      Bikes.getBikeById(id).then(function(res) {
        result = res;
      });

      $httpBackend.flush();

      expect(result._id).toEqual(RESPONSE_SUCCESS._id);
      expect(typeof result._id).toEqual('string');
      expect(typeof result).toEqual('object');
    });

    it('should throw an error if params improperly sent', function() {
      $httpBackend.whenPOST('/get_bike_by_id').respond(200, $q.when(RESPONSE_SUCCESS));

      expect(Bikes.getBikeById).toThrow(Error("No parameters passed in."));
    });

  });

  describe('addBike()', function() {

    var result;

    beforeEach(function() {

      result = {};

      spyOn(Bikes, 'addBike').and.callThrough();
    });

    it('should be defined', function() {
      expect(Bikes.addBike).toBeDefined();
    });

    it('should add a bike to the database and return a response of the bike data', function() {
      $httpBackend.whenPOST('/add_bike', NEW_BIKE).respond(200, $q.when(bikeList[0]));

      Bikes.addBike(NEW_BIKE).then(function(res) {
        result = res;
      });

      $httpBackend.flush();

      expect(result._id).toEqual(bikeList[0]._id);
    });

    it('should throw an error if no paramters are passed in', function() {
      $httpBackend.whenPOST('/add_bike').respond(200, $q.when(bikeList[0]));

      expect(Bikes.addBike).toThrow(Error("Parameters missing."));
    });
  });

  describe('addBikeDetails()', function() {

    var result;

    beforeEach(function() {
      result = {};

      spyOn(Bikes, "addBikeDetails").and.callThrough();
    });

    it('should be defined', function() {
      expect(Bikes.addBikeDetails).toBeDefined();
    });

    it('should add data to bikeList[1].geometry', function() {
      var geoData = {
        _id: "3fn5",
        soHeight: 719,
        bbHeight: 334,
        stAngle: 73.8,
        htAngle: 67,
        ttLength: 621,
        wheelbase: 1164,
        size: "L"
      };

      $httpBackend.whenPUT('/add_bike_details', geoData).respond(200, $q.when(bikeList));

      Bikes.addBikeDetails(geoData).then(function(res) {
        result = res;
      });

      $httpBackend.flush();

      expect(result[1].geometry[0].soHeight).toEqual(geoData.soHeight);
      expect(result[1].geometry[0].size).toEqual(geoData.size);
      expect(result[1]._id).toEqual(geoData._id);
    });

  });

});
