define([
	'backbone',
	'app/models/day'
], function (Backbone, DayModel) {

	'use strict';

	var DaysCollection = Backbone.Collection.extend({
		//define model
		model: DayModel,
		sync: function(method, model, options){
			//ajax will fail, because of a cross domain requst, must use jsonp. Modify sync method
			options.timeout = 8000;
			options.dataType = "jsonp";
			return Backbone.sync(method, model, options);
		},
		//get the response then return
		parse: function(response){
			//array
			return response.forecast.simpleforecast.forecastday;
		}
	});

	return DaysCollection;
});