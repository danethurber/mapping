define(['jquery', 'backbone', 'model/markers', 'view/map', 'view/controls'], function($, Backbone, Markers, Map, MapControls){

    var initialData = [
        {
            id : 1,
            city : 'Seattle',
            state : 'WA',
            latitude : 47.6063889,
            longitude : -122.3308333
        },
        {
            id : 2,
            city : 'Orlando',
            state : 'Florida',
            latitude : 28.5380556,
            longitude : -81.3794444
        },
        {
            id : 3,
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
            this.controls = ( new MapControls({
                el : $('#map-controls')
            }) ).render();

            Backbone.history.start();

            this.bindEvents();
        },

        home : function() {
            this.markers.reset( initialData );
        },

        bindEvents : function() {
            var self = this;

            this.controls.bind('addMarker', function(city) {
                switch(city) {
                    case 'slc':
                        self.markers.add({
                            id : 10,
                            city : 'Salt Lake City',
                            state : 'Utah',
                            latitude : 40.7608333,
                            longitude : -111.8902778
                        });
                        break;
                    case 'austin':
                        self.markers.add({
                            id : 11,
                            city : 'Austin',
                            state : 'Texas',
                            latitude : 30.2669444,
                            longitude : -97.7427778
                        });
                        break;
                }
            });

            this.controls.bind('clearClicked', this.map.trigger('clearClicked'));
        }
    });

    return AppRouter;
});