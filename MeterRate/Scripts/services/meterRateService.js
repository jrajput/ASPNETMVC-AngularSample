//Main meter rate service.
define(['common/services', 'services/mainMeterModule'], function (services, mainMeterModule) {
    services.service('meterRateService', [mainMeterModule]);
});