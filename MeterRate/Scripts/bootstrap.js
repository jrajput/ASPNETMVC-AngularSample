//Module to bootstrap angular app.
define(['angular', 'domReady', 'app', 'controllers/meterRateController'], function (angular, domReady) {
    domReady(function () {
        angular.bootstrap(document, ['MeterRateApp']);
    });
});