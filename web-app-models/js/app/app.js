define([
	'app/views/app',
	'app/routers/router',
	'app/models/app',
	'app/collections/days'
], function (AppView, Router, AppModel, DaysCollection) {

		'use strict';

		var initialize = function() {
			var appModel = new AppModel();

			var appView = new AppView({model: appModel});
			$('body').append(appView.render().el);
			//any arguments to constructor will pass to initalize method
			var router = new Router(appView);
			Backbone.history.start();

			var daysCollection = new DaysCollection([], {
				//dynamic and calls in many differenct forecasts
				url: 'http://api.wunderground.com/api/4471fe16425adcfb/forecast/q/IT/Magenta.json'
			});

			daysCollection.fetch({
				success: function (collection, response, options) {
					console.log(collection, response);
				},
				error: function (collection, response, options) {
					console.log('error');
				}
			});
		};

		return {
			initialize: initialize
		}
});