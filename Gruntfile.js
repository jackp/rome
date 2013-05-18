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
					server : path.resolve('.build/app/server/server.js'),
					monitor : {
						max : 2
					}
				}
			}
		},
		clean : ['.build'],
		coffee : {
			compile : {
				expand : true,
				src : ['app/**/*.coffee', '!**/plugins/**'],
				dest : '.build/',
				ext : '.js',
				options : {
					sourceMap : true
				}
			}
		},
		copy : {
			scripts : {
				files : [{expand: true, src: ['app/**/*.js'], dest: '.build/'}]
			},
			html : {
				files : [{expand: true, src: ['app/server/*.html'], dest: '.build/'}]
			}
		},
		jst : {
			compile : {
				options : {
					processName : function(filename){
						return path.basename(filename, '.html');
					},
					amd : true
				},
				files : {
					'.build/app/client/templates.js' : ['app/client/templates/*.html']
				}
			}
		},
		watch : {
			deletedScripts : {
				files : ['app/**'],
				tasks : ['clean'],
				options : {
					event : ['deleted'],
					livereload : true,
					nospawn : true
				}
			},
			scripts : {
				files : ['app/**/*.js'],
				tasks : ['copy:scripts'],
				options : {
					event : ['added', 'changed'],
					livereload: true,
					nospawn : true
				}
			},
			// coffeescript : {
			// 	files : ['app/**/*.coffee'],
			// 	tasks : ['coffee:compile'],
			// 	options : {
			// 		livereload : true,
			// 		nospawn : true
			// 	}
			// }
		}
	});

	grunt.event.on('watch', function(action, filepath){
		// After initial load, only run tasks on individual changed file
		grunt.config(['copy', 'scripts'], {
			files : [{expand: true, src: [filepath], dest: '.build/'}]
		});

		// Delete file
		grunt.config(['clean'], ['.build/' + filepath.slice(0, filepath.lastIndexOf('.')) + '.*']);
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask('start', ['clean', 'jst', 'coffee', 'copy', 'express', 'watch']);
};