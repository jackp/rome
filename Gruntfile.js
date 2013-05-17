///////////////////////////////////////////////////
//	Grunt Configuration File
///////////////////////////////////////////////////
var grunt = require('grunt'),
		path = require('path');

module.exports = function(grunt){
	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express : {
			start : {
				options : {
					hostname : 'localhost',
					server : path.resolve('app/server/server.js'),
					monitor : {
						max : 2
					}
				}
			}
		},
		watch : {
			all : {
				files : ['app/**', '!app/client/plugins/**'],
				options : {
					livereload : true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask('start', ['express', 'watch']);
};