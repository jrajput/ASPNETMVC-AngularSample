//Module to load time format validator directive.
define(['app', 'validators/timeValidator'], function (app, timeValidator) {
    app.directive('timeformatValidator', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelController) {
                ngModelController.$parsers.push(function (viewValue) {
                    return timeValidator(viewValue, scope);
                });
            }
        }
    });
});