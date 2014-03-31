//Module to do minute validation
define(function () {
    return function (viewValue, scope) {
        if (scope !== undefined && scope !== null) {
            scope.MeterRateModel.TotalFare = 0;
            if (viewValue !== undefined && viewValue !== null) {
                var re = /^[1-9][0-9]*$/;
                if (re.test(viewValue)) {
                    scope.IsInvalidMinute = false;
                    scope.IsDisabled = false;
                    return viewValue;
                }
                else {
                    scope.IsInvalidMinute = true;
                    scope.IsDisabled = true;
                    return undefined;
                }
            }
        }
    }
});