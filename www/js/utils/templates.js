
app.utils.templates = (function () {

    var load = function (views, callback) {

        var deferreds = [];

        $.each(views, function (index, view) {
            if (app.views[view]) {
                deferreds.push($.get('templates/' + view + '.html', function (data) {
                   app.views[view].prototype.template = _.template(data);
                    }, 'html'));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    }
    
    return {
        load: load
    };

}());