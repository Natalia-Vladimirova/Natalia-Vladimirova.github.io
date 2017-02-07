describe('create controller', function() {
	let suite;

	angular.mock.module.sharedInjector();

	beforeAll(function() {
		angular.mock.module('app');
	})

	beforeEach(inject(function($injector, $q, _$controller_, $rootScope) {
		suite = {};
		suite.articleService = $injector.get('articleService');
		spyOn(suite.articleService, 'create').and.returnValue($q.when());
		suite.scope = $rootScope.$new();
		suite.ctrl = _$controller_;
	}));

	afterEach(function() {
		suite = null;
	});

	it('should have button value when creating', function() {
		let ctrl = suite.ctrl('CreateController', { $scope: suite.scope });
		expect(ctrl.buttonValue).toEqual('Create');
	});

	it('should not call article service to create an article on submit if article undefined', function() {
		let ctrl = suite.ctrl('CreateController', { $scope: suite.scope });
		suite.scope.article = undefined;
		ctrl.submit();
		expect(suite.articleService.create).not.toHaveBeenCalled();
		expect(suite.scope.error_message).toBeDefined();
	});

	it('should not call article service to create an article on submit when article form is invalid', function () {
		let ctrl = suite.ctrl('CreateController', { $scope: suite.scope });
		suite.scope.article = {};
		suite.scope.articleForm = {
			$invalid: true
		};
		ctrl.submit();
		expect(suite.articleService.create).not.toHaveBeenCalled();
		expect(suite.scope.error_message).toBeDefined();
	});

	it('should call article service to create an article on submit when article form is valid', function () {
		let ctrl = suite.ctrl('CreateController', { $scope: suite.scope });
		suite.scope.article = {};
		suite.scope.articleForm = {
			$invalid: false,
			newImage: { $$element: [{ files: [] }] }
		};
		ctrl.submit();
		expect(suite.articleService.create).toHaveBeenCalled();
		expect(suite.scope.error_message).not.toBeDefined();
	});
});