'uses strict'

eventsApp.controller('CompileSampleController', function CompileSampleController($scope, $compile){
    $scope.appendToElement = function(markup){
      return $compile(markup)($scope).appendTo(angular.element('#appendHere'));
    };
});