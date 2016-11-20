'use strict';

eventsApp
    .directive('greeting', function(){
        return {
            restrict: 'E',
            replace: true,
            priority: 1,
            template: "<button class='btn' ng-Click='sayHello()'>Say Hello</button>",
            controller: 'GreetingController'
        };
    })
    .directive('finnish', function(){
        return {
            restrict: 'A',
            require: 'greeting',
            priority: 1,
            link: function(scope, element, attrs, controller){
                controller.addGreeting('hei');
            }

        }
    })
    .directive('hindi', function(){
        return {
            restrict: 'A',
            require: 'greeting',
            priority: 2,
            link : function(scope, element, attrs, controller){
                controller.addGreeting('namaste');
            }
        }
    });

eventsApp.controller('GreetingController', function($scope){
    var greetings = ['hello'];
    $scope.sayHello = function(){
        alert(greetings.join());
    }
    this.addGreeting = function(greeting){
        greetings.push(greeting);
    }
});