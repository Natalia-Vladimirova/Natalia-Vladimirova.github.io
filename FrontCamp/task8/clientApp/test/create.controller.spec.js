import CreateController from '../app/src/articles/create.controller';

describe('create controller', function () {
	let suite;
	
	angular.mock.module.sharedInjector();

	beforeEach(inject(function ($injector) {
		suite = {};
		
		let articleService = {
			create: function() {}
        };
        
		let $q = $injector.get('$q');
		let articlesPromise = $q(function(resolve, reject) {});
		
		spyOn(articleService, 'create').and.returnValue(articlesPromise);
		
		suite.articleService = articleService;
		suite.$location = $injector.get('$location');
		suite.$scope = $injector.get('$rootScope').$new();
	}));

	afterEach(function(){
		suite = null;
	});

	it('should call article service to get all articles when creating', function () {
		let ctrl = new CreateController(suite.articleService, suite.$location, suite.$scope);
		expect(ctrl.buttonValue).toEqual('Create');
	});
	
	it('should not call article service to create an article on submit if article undefined', function () {
		let ctrl = new CreateController(suite.articleService, suite.$location, suite.$scope);
		suite.$scope.article = undefined;
		ctrl.submit();
		expect(suite.articleService.create).not.toHaveBeenCalled();
		expect(suite.$scope.error_message).toBeDefined();
	});
	
	it('should not call article service to create an article on submit if article form is invalid', function () {
		let ctrl = new CreateController(suite.articleService, suite.$location, suite.$scope);
		suite.$scope.article = {};
		suite.$scope.articleForm = {
			$invalid: true
		};
		ctrl.submit();
		expect(suite.articleService.create).not.toHaveBeenCalled();
		expect(suite.$scope.error_message).toBeDefined();
	});
	
	it('should call article service to create an article on submit when form is valid', function () {
		let ctrl = new CreateController(suite.articleService, suite.$location, suite.$scope);
		suite.$scope.article = {};
		suite.$scope.articleForm = {
			$invalid: false,
			newImage: { $$element: [{ files: [] }] }
		};
		ctrl.submit();
		expect(suite.articleService.create).toHaveBeenCalled();
		expect(suite.$scope.error_message).not.toBeDefined();
	});
});