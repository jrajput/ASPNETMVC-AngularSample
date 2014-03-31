//Main meter rate module.
define(function () {
    return function () {
        var retObject = {};
        var scopeObject, total, that;
        total = 0;
        //Method to intialize the module
        retObject.Initialize = function (scope) {
            scopeObject = scope;
            that = this;
        };
        //Method to get minute fare
        retObject.GetMinuteUnitFare = function () {
            if ((scopeObject.MeterRateModel.NoOfMinutes !== undefined) &&
                (scopeObject.MeterRateModel.NoOfMinutes !== null)) {
                return (.35 * scopeObject.MeterRateModel.NoOfMinutes);
            }
            else
                return 0;
        };
        //Method to get miles fare
        retObject.GetMilesUnitFare = function () {
            if ((scopeObject.MeterRateModel.NoOfMiles !== undefined) &&
                (scopeObject.MeterRateModel.NoOfMiles !== null)) {
                return (.35 * scopeObject.MeterRateModel.NoOfMiles * 5);
            }
            else
                return 0;
        };
        //Method to get fare based on date and start time of ride
        retObject.GetDateTimeFare = function () {
            var rDate, day, hrs, retVal;
            retVal = 0;
            if ((scopeObject.MeterRateModel.DateOfRide !== undefined) &&
                (scopeObject.MeterRateModel.DateOfRide !== null) &&
                (scopeObject.MeterRateModel.TimeOfStartOfRide !== undefined) &&
                (scopeObject.MeterRateModel.TimeOfStartOfRide !== null)) {
                rDate = new Date(scopeObject.MeterRateModel.DateOfRide);
                day = rDate.getDay();
                rDate = new Date(scopeObject.MeterRateModel.DateOfRide + ' ' + scopeObject.MeterRateModel.TimeOfStartOfRide);
                hrs = rDate.getHours();

                if (hrs >= 20 || hrs <= 6) {
                    retVal = retVal + .5;
                }

                if (day > 0 && day < 6) {
                    if (hrs > 16 && hrs < 20) {
                        retVal = retVal + 1;
                    }
                }
            }
            return retVal
        };
        //Method to get fare if travelng in NY state
        retObject.GetNyStateFare = function () {
            if ((scopeObject.MeterRateModel.IsInNyState !== undefined) &&
                (scopeObject.MeterRateModel.IsInNyState !== null)) {
                if (scopeObject.MeterRateModel.IsInNyState) {
                    return .5;
                }
                else
                    return 0;
            }
            else
                return 0;
        };
        //Method to set the total fare
        retObject.SetTotal = function () {
            total = 0;
            total = total + that.GetMinuteUnitFare();
            total = total + that.GetMilesUnitFare();
            total = total + that.GetDateTimeFare();
            total = total + that.GetNyStateFare();
            scopeObject.MeterRateModel.TotalFare = 3 + total;
        }

        return retObject;
    }
});