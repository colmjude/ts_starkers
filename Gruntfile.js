/*global module:false */
module.exports = function(grunt) {

	grunt.initConfig({
		clean: {
			build: ["assets/"],
			repo: ['js/lib']
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		copy: {
			js: {
				expand: true, flatten: true,
				src: ["src/js/**"],
				dest: "assets/",
				filter: "isFile"
			},
			imgs: {
				expand: true, flatten: true,
				src: ["src/imgs/**"],
				dest: "assets/",
				filter: "isFile"
			}
		},
		curl: {
			'src/js/lib/_ts.js': 'https://raw.github.com/colmjude/_ts.js/master/_ts.js',
			'src/js/lib/html5shiv.js': 'https://raw.github.com/aFarkas/html5shiv/master/dist/html5shiv.js'
		},
		exec: {
			tsserve: {
				command: "tsapp serve",
				stdout: true
			},
			tspush: {
				command: "tsapp push blog_public",
				stdout: true
			}
		},
		jshint: {
			files: {
				src: ["Gruntfile.js", "src/js/*.js"]
			}
		}
	});

	grunt.registerTask("ts-deploy", "Deploy the application to TiddlySpace", function() {
		grunt.task.run("exec:tspush");
	});

	grunt.registerTask("ts-serve", "Host the application locally via tsapp", function() {
		grunt.task.run("exec:tsserve");
	});

	grunt.registerTask("default", ["jshint", "curl", "compass", "copy"]);
	grunt.registerTask("ts-clean", ["clean:build"]);
	grunt.registerTask("ts-update", ["compass", "copy", "ts-serve"]);
	grunt.registerTask("deploy", ["compass", "copy", "ts-deploy"]);

	grunt.loadNpmTasks("grunt-curl");
	grunt.loadNpmTasks("grunt-exec");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-clean");
};
