define(['marionette'], function(Marionette){
	console.log(this);
	return Marionette.ItemView.extend({
		template: App.Templates.landing
	});
});