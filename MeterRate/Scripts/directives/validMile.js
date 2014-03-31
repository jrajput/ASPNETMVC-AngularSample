//Module to load mile validator directive.
define(['app', 'validators/mileValidator'], function (app, mileValidator) {
    app.directive('validMile', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelController) {
                ngModelController.$parsers.push(function (viewValue) {
                    return mileValidator(viewValue,scope);
                });
            }
        }
    });
});