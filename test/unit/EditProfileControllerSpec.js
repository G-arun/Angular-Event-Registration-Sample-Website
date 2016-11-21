'use strict';

describe('EditProfileControllerSpec', function(){
    var $controllerConstructor, scope, mockGravatarUrlBuilder;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder= sinon.stub({buildGravatarUrl: function() {}})
    }));

    it('should build the gravatar with the given email address', function(){
        $controllerConstructor("EditProfileController",
          {'$scope': scope, 'gravatarUrlBuilder': mockGravatarUrlBuilder});
        var email = 'kev@kev.com';
        scope.getGravatarUrl(email);

        // verify that any email address gets passed
        // into the call to get Gravatar Url,
        // is the same email address that gets
        // passed into buildGravatarUrl
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);



    });
});