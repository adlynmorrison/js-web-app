define([
	'jquery',
	'underscore',
	'backbone',
	'app/collections/places', 
	'app/templates'
], function ($, _, Backbone, PlacesCollection, Templates){
	
	'use strict';

	var DashView = Backbone.View.extend({
		
		html: [
			'<h3>Dashboard page</h3>',
			'<div id="places-list" class="clearfix">Loading...</div>',
			'<div id="dash-buttons"></div>'
		].join(''),

		initialize: function(){
			this.$el.html(this.html);
			this.$placesList = this.$('#places-list');
			this.$dashButtons = this.$('#dash-buttons');

			this.collection = new PlacesCollection([]);
			this.listenTo(this.collection, 'change', this.render);
			this.collection.fetch();

			window.debug = {
				places: this.collection
			}
		},

		render: function(){
			//make sure we actually have templates
			if(this.collection.length){

				var placesHtml = []
				//element = indivdual model
				this.collection.each(function (element, index, list){
					places.push(Templates['place'](element.toJSON()))
				});

				this.$placesList.html(placesHtml.join(''));

			}else{
				//if not
				this.$placesList.html('Sorry, there are no places to display, please add some.');
			}
			return this;
		}
	});

	return DashView;
});