module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> | v<%= pkg.version %> | <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			test: {
				files:{
					'/home/jonathan/proyectos/Banqueteria/app/dist/test/script.js': [
						'src/cap.js',
						'src/capJS-uploadfile.js'
					]
				}
			},
			dist: {
				files: {
					'dist/capJS-uploadfile.min.js': [
						'src/cap.js',
						'src/capJS-uploadfile.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};