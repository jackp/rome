define([
	'jquery',
	'underscore',
	'backbone',
	'layoutmanager',
	'router'
], function($, _, Backbone, LayoutManager, Router){
	var initialize = function(){
		// Start Router
		var AppRouter = new Router();

		Backbone.history.start({pushState: true});

		// Link Handler
		$('body').on('click', 'a[href!=#][target!=_blank]', function(e){

			var link = $(this).attr('href');

			if(typeof(link)!='undefined' && !link.match(/^(?:https?|mailto):\/\/.*/) && !link.match(/^#.*/) && !link.match(/javascript/)) { // TODO: Find way to combine these into 1 regex
		    e.preventDefault();

		    AppRouter.navigate(link, true);
		  }
		});

		// Configure Backbone.Layout
		Backbone.Layout.configure({
			manage: true
		});

	};

	return {
		initialize : initialize
	}
});