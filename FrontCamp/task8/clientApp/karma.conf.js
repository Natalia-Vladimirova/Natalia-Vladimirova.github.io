// Karma configuration

module.exports = function(config) {
	
	let sourcePreprocessors = ['webpack', 'sourcemap', 'coverage'];
	
	function isDebug(argument) {
		return argument === '--debug';
	}
	
	if (process.argv.some(isDebug)) {
		sourcePreprocessors = ['webpack', 'sourcemap'];
	}

	
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'./node_modules/angular/angular.js',
			'./node_modules/angular-route/angular-route.js',
			'./node_modules/angular-resource/angular-resource.js',
			'./node_modules/angular-mocks/angular-mocks.js',
			'./app/src/app.js',
			'./test/index.js'
		],


		// list of files to exclude
		exclude: [
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'app/src/app.js': sourcePreprocessors,
			'test/index.js': ['webpack', 'sourcemap']
		},
		
		webpack: {
			devtool: 'inline',
			module: {
				loaders: [{
					test: /\.js$/, 
					loader: 'babel', 
					exclude: /node_modules/
				}]
			}
		},
		
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage'],

		coverageReporter: {
			// specify a common output directory
			dir: 'coverage',
			reporters: [
				{ type: 'html', subdir: '.' },
				{ type: 'text-summary' }
			],
			instrumenters: {
				isparta : require('isparta')
			},
			instrumenter: {
				'**/*.js': 'isparta'
			}
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS2'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	})
}
