describe('Users factory', function() {
    var Users;

    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(function(_Users_) {
        Users = _Users_;
    }));

    it('should exist', function() {
        expect(Users).toBeDefined();
    });
});
