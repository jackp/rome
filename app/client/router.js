define(['marionette'], function(Marionette){
	var App = require('App');
	
	return Marionette.appRouter.extend({
		routes : {
			"test" : "test"
		},
		test : function(){

		}
	});
});