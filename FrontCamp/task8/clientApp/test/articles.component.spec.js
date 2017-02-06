describe('articles component', function() {
	let suite;

	angular.mock.module.sharedInjector();

	beforeAll(function() {
		angular.mock.module('app');
	});

	beforeEach(inject(function($injector, $q, _$componentController_) {
		suite = {};
		suite.articleService = $injector.get('articleService');
		spyOn(suite.articleService, 'getAll').and.returnValue($q.when())
		suite.$componentController = _$componentController_;
	}));

	afterEach(function() {
		suite = null;
	});

	it('should call article service to get all articles', function() {
		let ctrl = suite.$componentController('articles', null);
		expect(suite.articleService.getAll).toHaveBeenCalled();
	});
});