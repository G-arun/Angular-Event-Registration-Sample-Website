'use strict'

eventsApp.controller('EventController',
    function EventController($scope, eventData){

        // descending
        $scope.sortorder = 'name';

        $scope.snippet = '<span style="color:red">hi there</span>';

        eventData.getEvent(function(event){
            $scope.event = event;
        });

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
    }
);