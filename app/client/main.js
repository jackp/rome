require.config({
	paths : {
		backbone : "plugins/backbone-amd/backbone",
		underscore : "plugins/underscore-amd/underscore",
		jquery : "plugins/jquery/jquery",
		layoutmanager : "plugins/layoutmanager-amd/backbone.layoutmanager"
	},
	shim : {
		jquery : {
			exports : 'jQuery'
		}
	}
});

require(['app', 'router'], function(App, Router){
	App.Router = new Router();

	Backbone.history.start({pushState: true});

	// Link Handler
	$('body').on('click', 'a[href!=#][target!=_blank]', function(e){

		var link = $(this).attr('href');

		if(typeof(link)!='undefined' && !link.match(/^(?:https?|mailto):\/\/.*/) && !link.match(/^#.*/) && !link.match(/javascript/)) { // TODO: Find way to combine these into 1 regex
	    e.preventDefault();

	    App.Router.navigate(link, true);
	  }
	});
});