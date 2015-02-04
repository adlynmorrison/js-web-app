define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, backbone){
		'use strict'

		var Router = Backbone.Router.extend({
			routes:{
				//no route go to dashboard
				'': 'goToDash',
				'dash': 'goToDash',
				'dash/:place': 'goToDash',
				'about': 'goToAbout'
			},

			initialize: function(view){
				this.appView = view;
			},
			//define dash method -set page to dash
			goToDash: function(place){
				this.appView.setPage('dash');
				if (place) {
					alert('Weather detail for ' + place);
				}
			},
			//define about method -set page to about
			goToAbout: function(){
				this.appView.setPage('about');
			}
		});

		return Router;
});