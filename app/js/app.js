'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute'])
    .config(function($routeProvider){
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
                controller: 'EventController'
            });
        $routeProvider.otherwise({redirectTo: '/events'});
    })
    .factory('myCache', function($cacheFactory){
        return $cacheFactory('myCache', {capacity:3});
    });
