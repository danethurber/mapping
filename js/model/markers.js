define(['backbone'], function(Backbone){

    var Marker = Backbone.Model.extend({
        defaults : {
            latitude : null,
            longitude : null,
            title : null
        }
    });

    var Markers = Backbone.Collection.extend({
        model : Marker
    });

    return Markers;
});