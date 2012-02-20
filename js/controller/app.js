define(['jquery', 'backbone', 'model/markers', 'view/map'], function($, Backbone, Markers, Map){

    var initialData = [
        {
            city : 'Salt Lake City',
            state : 'Utah',
            latitude : 40.7608333,
            longitude : -111.8902778
        },
        {
            city : 'Austin',
            state : 'Texas',
            latitude : 30.2669444,
            longitude : -97.7427778
        },
        {
            city : 'Seattle',
            state : 'WA',
            latitude : 47.6063889,
            longitude : -122.3308333
        },
        {
            city : 'Orlando',
            state : 'Florida',
            latitude : 28.5380556,
            longitude : -81.3794444
        },
        {
            city : 'New York',
            state : 'New York',
            latitude : 40.7141667,
            longitude : -74.0063889
        }
    ];


    var AppRouter = Backbone.Router.extend({
        routes : {
            '' : 'home'
        },
        initialize : function() {
            this.markers = new Markers();
            this.map = ( new Map({
                el : $('#map'),
                collection : this.markers
            }) ).render();

            Backbone.history.start();
        },
        home : function() {
            this.markers.reset( initialData );
        }
    });

    return AppRouter;
});