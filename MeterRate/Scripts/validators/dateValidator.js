//Module to do date validation
define(function () {
    return function (viewValue, scope) {
        if (scope !== undefined && scope !== null) {
            scope.MeterRateModel.TotalFare = 0;
            if (viewValue !== undefined && viewValue !== null) {
                if (Date.parseExact(viewValue, 'yyyy-MM-dd') !== null) {
                    scope.IsInvalidDate = false;
                    scope.IsDisabled = false;
                    return viewValue;
                }
                else {
                    scope.IsInvalidDate = true;
                    scope.IsDisabled = true;
                    return undefined;
                }
            }
        }
    }
});