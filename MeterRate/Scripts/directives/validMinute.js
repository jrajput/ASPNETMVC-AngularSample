//Module to load minute validator directive.
define(['app', 'validators/minuteValidator'], function (app, minuteValidator) {
    app.directive('validMinute', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelController) {
                ngModelController.$parsers.push(function (viewValue) {
                    return minuteValidator(viewValue, scope);
                });
            }
        }
    });
});