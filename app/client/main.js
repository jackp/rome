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

require(['app'], function(App){
	App.initialize();
});