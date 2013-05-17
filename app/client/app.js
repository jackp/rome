define([
	'marionette'
], function(Marionette){
	var App = new Marionette.Application();

	// Setup Regions
	App.addRegions({
		container : "#container"
	});

	// Export app
	return App;
});