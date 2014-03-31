//Module to load meter rate controller.
define(['common/controllers', 'services/meterRateService', 'directives/dateformatValidator', 'directives/timeformatValidator', 'directives/validMinute', 'directives/validMile'], function (controllers, meterRateService) {
    controllers.controller('meterRateController', ['$scope', 'meterRateService', function ($scope, meterRateService) {
        $scope.MeterRateModel = angular.fromJson($("#hdnMeterRateModel").val().replace(new RegExp("&quot;", "g"), "\""));
        meterRateService.Initialize($scope);
        meterRateService.SetTotal();
        $scope.SetFareTotal = meterRateService.SetTotal;
    } ]);
});