//Requirejs entry point for the main app
require.config({
    baseUrl: '/Scripts/',
    paths: {
        angular: 'vendor/angular.min',
        domReady: 'vendor/require/domReady'
    },
    shim: {
        angular: {exports : 'angular'}
    }
});

require(['app', 'bootstrap'], function (app) {
    //can write code for start up processing
});