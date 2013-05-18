define([
	'app',
	// Modules
	// "modules/landing",
	// "modules/dashboard"
], function(app){

	var Router = Backbone.Router.extend({
		routes : {
			"" : "landing",
			"test" : "test" 
		},
		// Landing Router
		landing : function(){
			app.useLayout('landing').render();
		},
		test : function(){
			app.useLayout('test').render();
		}
	});

	return Router;
});