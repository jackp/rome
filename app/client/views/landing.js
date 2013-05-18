// Landing Page
define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function($, _, Backbone, Templates){
	var layout = new Backbone.Layout({
		el : '#main-content',
		template : Templates.landing
	});

	layout.render();
});