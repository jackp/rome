define([
	'jquery',
	'underscore',
	'backbone'
	// views
], function($, _, Backbone){
	var AppRouter = Backbone.Router.extend({
		routes : {
			"" : "landing"
		},
		// Landing Router
		landing : function(){
			alert('landing page');
		}
	});

	return AppRouter;
});