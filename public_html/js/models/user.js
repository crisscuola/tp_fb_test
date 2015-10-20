define([
    'backbone'
], function(
    Backbone
){
    var Model = Backbone.Model.extend({
        defaults: {
            name: "",
            password: "",
            score: 0,
            logged: false
        },
        initialize: function() {
        },

    });
    return Model;
});