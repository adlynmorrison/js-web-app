define([
	'app/views/app',
	'app/views/counter'
], function(AppView){

		'use strict';

		var initialize = function() {
			var appView = new AppView();
			$('body').append(appView.el);
		};

		return {
			initialize: initialize,
		}
});