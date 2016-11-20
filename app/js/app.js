'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider.when('/newEvent',
            {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                foo: 1,
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function($route, eventData){
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider.when('/sampleDirective',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            });
        $routeProvider.when('/editProfile',
            {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController'
            });
        $routeProvider.otherwise({redirectTo: '/events'});
        $locationProvider.html5Mode(true);
    })
    .factory('myCache', function($cacheFactory){
        return $cacheFactory('myCache', {capacity:3});
    });
