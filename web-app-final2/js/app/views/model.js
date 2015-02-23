define([
	'jquery',
	'underscore',
	'backbone',
	'app/templates',
	'boostrap'
], function ($, _, Backbone, Templates, Bootstrap) {
	'use strict';

	var ModalView = Backbone.View.extend({
		template: Templates['modal'],

		events: {

		},

		id: 'modal-view',

		initialize: function(){

		},

		render: function(){
			return this;
		},

		show: function(){

		},

		onModalHidden: function(e){
			
		}
	});

	return ModalView;
});