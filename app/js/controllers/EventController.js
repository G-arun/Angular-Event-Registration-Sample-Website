'use strict'

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log){

        // descending
        $scope.sortorder = 'name';

        $scope.snippet = '<span style="color:red">hi there</span>';

        eventData.getEvent()
            .$promise.then(function(event){
                $scope.event = event;
                console.log(event);
            })
            .catch(function(response){
                console.log(response);
            });

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
    }
);