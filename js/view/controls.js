define(['jquery', 'backbone'], function($, Backbone){

    var Controls = Backbone.View.extend({
        template : _.template(
            '<li class="nav-header">Add City</li>' +
            '<li><a href="" data-location="slc">Salt Lake City</a></li>' +
            '<li><a href="" data-location="austin">Austin</a></li>'
        ),
        id: 'map-controls',

        events : {
            'click a' : 'triggerAdd'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'triggerAdd');
        },

        triggerAdd : function(e) {
            e.preventDefault();
            this.trigger('addMarker', $(e.target).attr('data-location') );
        },

        render : function() {
            $(this.el).html( this.template({}) );
            return this;
        }
    });

    return Controls;
});