define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/counter'
], function($, _, Backbone, CounterView){
	'use strict';
	//main app view
	var AppView = Backbone.View.extend({
		id: 'app-view',

		html: [
			'<div class="navbar">',
				'<a class="navbar-brand" href="#">Weather Watcher</a>',
				'<ul class="nav navbar-nav">',
					'<li id="nav-dash"><a href="#">Dashboard</a></li>',
					'<li id="nav-about"><a href="#">About</a></li>',
				'</ul>',
			'</div>',
			'<div id="content"></div>'
		].join(''),

		events: {
			'click #nav-dash': 'onNavDash',
			'click #nav-about': 'onNavAbout'
		},

		views: {},

		initialize: function(){
			this.views['counter'] = new CounterView({
				id: 'counter-widget',
				className: 'counter-widget'
			});
			//append this html to out view's jquery element object
			this.$el.append(this.html);

			this.$('#content').append(this.views['counter'].render().el);
		},

		onNavAbout: function(e){
			alert('About button clicked');	
		},

		onNavDash: function(e){
			alert('Dash button clicked');	
		}
	});

	return AppView;
});