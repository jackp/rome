define([
	// Plugins
	'layoutmanager',
	'templates'
], function(){
	var app = {
		root : '/'
	};

	var JST = window.JST = window.JST || {};

	// Configure LayoutManager
	Backbone.Layout.configure({
		manage : true,
		fetch : function(path){
			if(JST[path]){
				return JST[path];
			} else {
				console.log('No template found:' + path)
			}
		}
	});

	// Add events, modules, layout management to app
	return _.extend(app, {
		// Custom module object
		module : function(additionalProps){
			return _.extend({ Views: {}}, additionalProps);
		},
		// Layout Helper
		useLayout : function(name, options){
			options = options || {};

			if(_.isString(name)){
				options.template = name;
			}

			// Create new Layout
			var layout = new Backbone.Layout(_.extend({
				el : "#main"
			}, options));

			return this.layout = layout;
		}
	}, Backbone.Events)
});