import ArticlesComponent from '../app/src/components/articles.component';

describe('articles component', function () {
	let suite;

	angular.mock.module.sharedInjector();

	beforeEach(inject(function ($injector) {
		suite = {};
		suite.$q = $injector.get('$q');
		
		let articlesPromise = suite.$q(function(resolve, reject) {
					resolve([
						{
							title: 'test',
							text: 'test text'
						},
						{
							title: 'test2',
							text: 'test text2'
						}
					]);
				});
		
		let articleService = {
            getAll: function() {}
        };
        
		spyOn(articleService, 'getAll').and.returnValue(articlesPromise);
		
		suite.articleService = articleService;
	}));

	afterEach(function(){
		suite = null;
	});

	it('should call article service to get all articles', function () {
		ArticlesComponent.controller(suite.articleService);
		expect(suite.articleService.getAll).toHaveBeenCalled();
	});
});