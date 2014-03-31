//Module to load date format validator directive.
define(['app', 'validators/dateValidator'], function (app, dateValidator) {
    app.directive('dateformatValidator', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelController) {
                ngModelController.$parsers.push(function (viewValue) {
                    return dateValidator(viewValue, scope);                    
                });
            }
        }
    });
});