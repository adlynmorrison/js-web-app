define([
	'backbone',
], function (Backbone){

	'use strict';

	var DayModel = Backbone.Model.extend({
		defaults: {
			'conditions': null,
			'highCelsius': null,
			'lowCelsius': null,
			'highFahrenheit': null,
			'lowFahrenheit': null,
			'icon_url': ''
		},
		parse: function (data) {
			var map = {
				'conditions': data.conditions,
				'highCelsius': data.high.celsius,
				'lowCelsius': data.low.celsius,
				'highFahrenheit': data.high.fahrenheit,
				'lowFahrenheit': data.low.fahrenheit,
				'icon_url': data.icon_url
			};
			return map;
		}
	});

	return DayModel;
});