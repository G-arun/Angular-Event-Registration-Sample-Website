'uses strict'

eventsApp.controller('CacheSampleController', function CacheSampleController($scope, myCache){
    $scope.addToCache = function(key, value){
        myCache.ut(key, value);
    };

    $scope.readFromCache = function(key) {
        return myCache.get(key);
    };

    $scope.getCacheStats = function() {
        return myCache.info();
    };

});