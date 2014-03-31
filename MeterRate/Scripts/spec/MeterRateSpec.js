//Module to load test spec for meter rate app.
define(['services/mainMeterModule', 'validators/dateValidator', 'validators/mileValidator', 'validators/minuteValidator', 'validators/timeValidator'],
    function (mainMeterModule, dateValidator, mileValidator, minuteValidator, timeValidator) {
        describe("MeterRate", function () {
            var meterMod, scope;
            beforeEach(function () {
                scope = {};
                scope.MeterRateModel = {};
                scope.MeterRateModel.NoOfMinutes = 500;
                scope.MeterRateModel.NoOfMiles = 2;
                scope.MeterRateModel.DateOfRide = "2010-10-08";
                scope.MeterRateModel.TimeOfStartOfRide = "05:30 PM";
                scope.MeterRateModel.IsInNyState = true;
                scope.MeterRateModel.TotalFare = 0;
                meterMod = mainMeterModule(scope);
                meterMod.Initialize(scope);
            });
            it("should be able to validate mile", function () {
                expect(mileValidator(scope.MeterRateModel.NoOfMiles, scope)).toNotEqual(undefined);
                expect(mileValidator(scope.MeterRateModel.NoOfMiles, scope)).toEqual(scope.MeterRateModel.NoOfMiles);
            });
            it("should not be able to validate mile", function () {
                expect(mileValidator('a', scope)).toEqual(undefined);
                expect(mileValidator('a', scope)).toNotEqual('a');
            });
            it("should be able to validate minutes", function () {
                expect(minuteValidator(scope.MeterRateModel.NoOfMinutes, scope)).toNotEqual(undefined);
                expect(minuteValidator(scope.MeterRateModel.NoOfMinutes, scope)).toEqual(scope.MeterRateModel.NoOfMinutes);
            });
            it("should not be able to validate minutes", function () {
                expect(minuteValidator('a', scope)).toEqual(undefined);
                expect(minuteValidator('a', scope)).toNotEqual('a');
            });
            it("should be able to validate date", function () {
                expect(dateValidator(scope.MeterRateModel.DateOfRide, scope)).toNotEqual(undefined);
                expect(dateValidator(scope.MeterRateModel.DateOfRide, scope)).toEqual(scope.MeterRateModel.DateOfRide);
            });
            it("should not be able to validate date", function () {
                expect(dateValidator('2012-02-31', scope)).toEqual(undefined);
                expect(dateValidator('2012-02-31', scope)).toNotEqual('2012-02-31');
            });
            it("should be able to validate time", function () {
                expect(timeValidator(scope.MeterRateModel.TimeOfStartOfRide, scope)).toNotEqual(undefined);
                expect(timeValidator(scope.MeterRateModel.TimeOfStartOfRide, scope)).toEqual(scope.MeterRateModel.TimeOfStartOfRide);
            });
            it("should not be able to validate time", function () {
                expect(timeValidator('5:30', scope)).toEqual(undefined);
                expect(timeValidator('5:30', scope)).toNotEqual('5:30');
            });
            it("should be able to get mile fare", function () {
                expect(meterMod.GetMilesUnitFare()).toEqual(3.5);
            });
            it("should be able to get minute fare", function () {
                expect(meterMod.GetMinuteUnitFare()).toEqual(175);
            });
            it("should be able to get date/time fare", function () {
                expect(meterMod.GetDateTimeFare()).toEqual(1);
            });
            it("should be able to get ny state fare", function () {
                expect(meterMod.GetNyStateFare()).toEqual(.5);
            });
            it("should be able to set correct total", function () {
                meterMod.SetTotal();
                expect(scope.MeterRateModel.TotalFare).toEqual(183);
            });
        });
});

 