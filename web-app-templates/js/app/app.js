define([
	'app/views/app',
	'app/routers/router',
	'app/models/app'
], function (AppView, Router, AppModel) {

		'use strict';

		var initialize = function() {
			var appModel = new AppModel({id:1});

			var appView = new AppView({model: appModel});
			$('body').append(appView.render().el);
			//any arguments to constructor will pass to initalize method
			var router = new Router(appView);
			Backbone.history.start();

			appModel.fetch();
		};

		return {
			initialize: initialize
		}
});