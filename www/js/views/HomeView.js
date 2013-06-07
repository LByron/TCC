app.views.HomeView = Backbone.View.extend({

    initialize: function () {
      
    },

    render: function () {
        this.$el.html(this.template());
        $("#firstPage").html(this.$el.html());
        return this;
    }

   

});