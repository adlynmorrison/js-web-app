define([
	'app/views/app',
	'app/routers/router'
], function(AppView, Router){

		'use strict';

		var initialize = function() {
			var appView = new AppView();
			$('body').append(appView.el);
			//any arguments to constructor will pass to initalize method
			var router = new Router(appView);
			Backbone.history.start();
		};

		return {
			initialize: initialize,
		}
});