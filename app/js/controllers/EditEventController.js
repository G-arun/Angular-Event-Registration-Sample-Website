'use strict'

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData){
        $scope.saveEvent = function(event, newEventForm){
            if (newEventForm.$valid) {
                eventData.save(event)
                    .$promise.then(function(response){
                        console.log('success: ', response);
                    })
                    .catch(function(response){
                        console.log('failure: ', response);
                    });
                window.alert('event ' + event.name + ' saved!');
            }
        };

        $scope.cancelEdit = function(){
            window.location = "/EventDetails.html";
        };
    }
);