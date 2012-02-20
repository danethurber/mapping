require.config({
    urlArgs: 'cachebust=' +  (new Date()).getTime(), // cache bust
    paths: {
        async:              'libs/require/async',
        propertyParser:     'libs/require/propertyParser',
        jquery:             'libs/jquery/jquery',
        underscore:         'libs/underscore/underscore-1.3.1-amd',
        backbone:           'libs/backbone/backbone-0.9.1-amd',
        text:               'libs/require/text',
        template:           'template' // path to the template files
    }
});

require(['jquery', 'controller/app'], function($, AppRouter){

    var appRouter = new AppRouter();

});

// log function so i don't break ie
window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments);
    
    if (this.console) {
        if (arguments.length == 1) console.debug(arguments[0]);
        else console.log( Array.prototype.slice.call(arguments) );
    }
};