describe('article form directive', function() {
	let suite;

	angular.mock.module.sharedInjector();

	beforeAll(function() {
		angular.mock.module('app');
		angular.mock.module('templates');
	});

	beforeEach(inject(function ($compile, $rootScope) {
		suite = {};
		suite.scope = $rootScope.$new();
		suite.element = $compile('<article-form></article-form>')(suite.scope);
	}));
	
	afterEach(function() {
		suite = null;
	});

	it('should display article title and text', function() {
		suite.scope.article = {
			title: 'test title',
			text: 'test text'
		};
		suite.scope.$digest();
		let articleForm = suite.element.find('form')[0];
		expect(articleForm[0].value).toEqual(suite.scope.article.title);
		expect(articleForm[1].value).toEqual(suite.scope.article.text);
	});
});