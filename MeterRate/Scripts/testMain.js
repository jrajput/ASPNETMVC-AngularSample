//Requirejs entry point for the test
require.config({
    baseUrl: '/Scripts/',
    paths: {
        'jasmine': 'vendor/jasmine',
        'jasmine-html': 'vendor/jasmine-html'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});

require(['jasmine-html'], function (jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    require(['spec/MeterRateSpec'], function (spec) {
        jasmineEnv.execute();
    });
});