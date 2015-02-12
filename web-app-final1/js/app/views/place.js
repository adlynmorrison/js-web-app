define([
	'jquery',
	'underscore',
	'backbone', 
	'app/templates',
	'app/collections/days'
], function ($, _, Backbone, Templates, DayCollection){
	
	'use strict';

	var PlaceView = Backbone.View.extend({
		
		template: Templates['place'],

		collection: new DaysCollection([]),



		initialize: function(){
			var html = this.template(this.model.toJSON());
			this.$el.html(html);
			//cache a new object
			this.$bodyEl = this.$('.panel-body');
		},

		render: function(){
			this.collection.url = {
				'http://api.wunderground.com/api/'.
			}.join('');
			
			return this;
		}
	});

	return PlaceView;
});