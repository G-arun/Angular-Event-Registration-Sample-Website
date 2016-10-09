'use strict';

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController($scope, $locale){
        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

        // for testing exceptionHandler
        throw {message: 'error message'};
    }
);
