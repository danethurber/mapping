define(['jquery', 'backbone', 'async!http://maps.google.com/maps/api/js?sensor=false'], function($, Backbone){

    var MapDisplay = Backbone.View.extend({
        id: 'map',

        isCreated: false,

        markers : [],

        initialize: function() {
            _.bindAll(this, 'render',
                            'reset',
                            'addOne',
                            'addAll',
                            'clearAllMarkers',
                            'fitBounds');

            this.collection.on('reset', this.reset);
            this.collection.on('add', this.addOne);
        },

        render : function() {
            if( !this.isCreated ) {
                this.map = new google.maps.Map( $(this.el)[0], {
                    minZoom: 4,
                    maxZoom: 10,
                    streetViewControl: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                } );
                this.isCreated = true;
            }

            this.addAll();

            return this;
        },

        reset : function() {
            this.clearAllMarkers();
            this.render();
        },

        addOne : function(model) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(
                    model.get('latitude'),
                    model.get('longitude')
                ),
                map: this.map,
                title: model.get('title')
            });

            this.markers.push(marker);
        },

        addAll : function() {
            this.collection.each( this.addOne );
            this.fitBounds();
        },

        clearAllMarkers : function() {
            _.each( this.markers, function(marker) {
                marker.setMap(null);
            });
        },

        fitBounds : function() {
            var bounds = new google.maps.LatLngBounds();
            
            this.collection.each( function(model) {
                bounds.extend( new google.maps.LatLng( model.get('latitude'), model.get('longitude')) );
            });
            this.map.fitBounds(bounds);
        }
    });

    return MapDisplay;
});