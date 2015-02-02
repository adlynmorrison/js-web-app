define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone){
	
	'use strict';

	var CounterView = Backbone.View.extend({
		
		count: 0,

		initialize: function(){

		},

		events: {
			'click span': 'addToCounter'
		},

		render: function(){
			var html = '<h3>This view has been <span>clicked</span> ' + this.count + ' times</h3>';
			this.$el.html(html);
			return this;
		},
		//seperating data from render can result is more complicated
		//versions of both
		addToCounter: function () {
			this.count++;
			this.render();
		}
	});

	return CounterView;
});