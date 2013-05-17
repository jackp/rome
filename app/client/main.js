require.config({
	paths : {
		backbone : "plugins/backbone-amd/backbone",
		underscore : "plugins/underscore-amd/underscore",
		jquery : "plugins/jquery/jquery",
		marionette : "plugins/backbone.marionette/lib/backbone.marionette",
		tpl : "plugins/requirejs-tpl/tpl"
	},
	shim : {
		jquery : {
			exports : 'jQuery'
		},
		marionette : {
			deps : ['jquery', 'underscore', 'backbone'],
			exports : "Marionette"
		}
	}
});

require(['app'], function(App){
	App.start();
});