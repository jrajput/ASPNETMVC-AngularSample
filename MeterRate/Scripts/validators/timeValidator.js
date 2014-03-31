//Module to do time validation
define(function () {
    return function (viewValue, scope) {
        if (scope !== undefined && scope !== null) {
            scope.MeterRateModel.TotalFare = 0;
            if (viewValue !== undefined && viewValue !== null) {
                var re = /^([0]\d|[1][0-2]):([0-5]\d)\s(?:AM|PM)$/i;
                if (re.test(viewValue)) {
                    scope.IsInvalidTime = false;
                    scope.IsDisabled = false;
                    return viewValue;
                }
                else {
                    scope.IsInvalidTime = true;
                    scope.IsDisabled = true;
                    return undefined;
                }
            }
        }
    }
});