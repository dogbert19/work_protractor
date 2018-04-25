//const port = process.env.SUB_APP_PORT ? ':' + process.env.SUB_APP_PORT : '';
//const baseUrl = `${process.env.SUB_APP_BASE_URL}${port}${process.env.SUB_APP_PATH_PREFIX}/`;

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 10000,
    rootElement: 'html',
    //allScriptsTimeout: 50000,
    defaultTimeoutInterval: 150000,

    includeStackTrace: true,
    chromeOnly: true,
    // directConnect: true,
    specs: ['apps.js'],

    multiCapabilities: [
        { 'browserName': 'chrome' },

    ],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000,
        print: function () { }
    },

    onPrepare: function () {
        browser.addMockModule('toasterDelay', () => angular.module('toasterDelay', []).constant('toasterDelay', 1));
    }

};





//   exports.config = {
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: ['catalog.js'],

//   jasmineNodeOpts: {
//      defaultTimeoutInterval: 300000,
//     print: function() {}
//    },
// };
