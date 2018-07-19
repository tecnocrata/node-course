require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	babel: {
		options: {
			sourceMap: true,
			presets: ['env']
		},
		dist: {
			files: {
				'dist/**/*.js': 'src/app.js'
			}
		}
	}
});

grunt.registerTask('dev', ['babel']);