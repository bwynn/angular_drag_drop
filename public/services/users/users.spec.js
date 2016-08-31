describe('Users factory', function() {
    var Users, $q, $httpBackend;

    // hard coded array of users
    var userList = [
        {
            id: "1",
            name: "Brian",
            age: "32",
            languages: [
                "JavaScript",
                "CSS",
                "HTML5"
            ],
            location: "Los Gatos"
        },
        {
            id: "2",
            name: "Grant",
            age: "32",
            languages: [
                "Spanish",
                "Italian"
            ],
            location: "Ventura"
        }
    ];

    // mocked response data for find by id
    var RESPONSE_SUCCESS = {
        id: 1,
        name: "Brian",
        age: "32",
        languages: [
            "JavaScript",
            "CSS",
            "HTML5"
        ],
        location: "Los Gatos"
    }

    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(function(_Users_, _$q_, _$httpBackend_) {
        Users = _Users_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    it('should exist', function() {
        expect(Users).toBeDefined();
    });

    describe('.all()', function() {
        it('should exist', function() {
            expect(Users.all).toBeDefined();
        });

        it('should return a hard coded list of users', function() {
            expect(Users.all()).toEqual(userList);
        });
    });

    describe('.findById()', function() {
        var result;
        var query = {id: 1};

        beforeEach(function() {
            result = {};

            spyOn(Users, "findById").and.callThrough();
        });

        it('should exist', function() {
            expect(Users.findById).toBeDefined();
        });

        it('should return a single user', function() {

            // mocked response 
            $httpBackend.whenPOST('/find_by_id', query).respond(200, $q.when(RESPONSE_SUCCESS));

            expect(Users.findById).not.toHaveBeenCalled();
            expect(result).toEqual({});

            Users.findById(query).then(function(res) {
                result = res;
            });

            $httpBackend.flush();

            expect(result.id).toEqual(1);
            expect(result.name).toEqual("Brian");
            expect(result.age).toEqual("32");
            expect(result.location).toEqual("Los Gatos");
            expect(result.languages.length).toEqual(3);
        });

        it('should return undefined if the user cannot be found', function() {

            var newQuery = {id: "ABC"};

            // mocked response
            $httpBackend.whenPOST('/find_by_id', newQuery).respond(200, $q.when(RESPONSE_SUCCESS));

            Users.findById(newQuery).catch(function(res) {
                result = res;
            });

            $httpBackend.flush();

            expect(Users.findById).toHaveBeenCalledWith(newQuery);
            expect(result.id).not.toBeDefined();
        });
    });
});
