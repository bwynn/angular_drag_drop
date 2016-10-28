describe('Bikes factory', function() {

  var Bikes, $q, $httpBackend;

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

    it('should return a set of bikes', function() {
      
    });
  })
});
