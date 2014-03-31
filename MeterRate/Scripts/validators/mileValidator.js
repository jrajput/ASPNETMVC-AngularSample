//Module to do time validation
define(function () {
    return function (viewValue, scope) {
        if (scope !== undefined && scope !== null) {
            scope.MeterRateModel.TotalFare = 0;
            if (viewValue !== undefined && viewValue !== null) {
                var re = /^[1-9][0-9]*$/;
                if (re.test(viewValue)) {
                    scope.IsInvalidMile = false;
                    scope.IsDisabled = false;
                    return viewValue;
                }
                else {
                    scope.IsInvalidMile = true;
                    scope.IsDisabled = true;
                    return undefined;
                }
            }
        }
    }
});