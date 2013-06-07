app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "": "home"
    },

    initialize: function () {
       

    },

    home: function () {
        
        if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            app.homeView.render();
        } else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); 
        }
  
    }

});