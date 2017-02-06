describe('article service', function() {
	let suite;
	let articles;
	let $httpBackend;

	angular.mock.module.sharedInjector();

	beforeAll(function() {
		angular.mock.module('app');
	});

	beforeEach(inject(function($injector) {
		articles = [{
				id: 1,
				title: 'test',
				text: 'test text'
			}, {
				id: 2,
				title: 'test2',
				text: 'test text2'
			}
		];

		suite = {};
		suite.articleService = $injector.get('articleService');

		spyOn(suite.articleService.articleResource, 'create').and.callThrough();
		spyOn(suite.articleService.articleResource, 'update').and.callThrough();
		spyOn(suite.articleService.articleResource, 'delete').and.callThrough();

		$httpBackend = $injector.get('$httpBackend');
		$httpBackend.when('GET', 'http://localhost:3000/articles').respond(articles);
		$httpBackend.when('GET', 'http://localhost:3000/articles/1').respond(articles[0]);
		$httpBackend.when('POST', 'http://localhost:3000/articles').respond();
		$httpBackend.when('PUT', 'http://localhost:3000/articles').respond();
		$httpBackend.when('DELETE', 'http://localhost:3000/articles/2').respond();
	}));

	afterEach(function() {
		suite = null;
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should call resource to get all articles', function() {
		let result;
		suite.articleService.getAll().then(function(data) {
			result = data;
		});
		$httpBackend.flush();
		expect(result[0].id).toEqual(articles[0].id);
		expect(result[1].id).toEqual(articles[1].id);
		expect(result.length).toEqual(2);
	});

	it('should call resource to get one article', function() {
		let result;
		suite.articleService.get(articles[0].id).then(function(data) {
			result = data;
		});
		$httpBackend.flush();
		expect(result.id).toEqual(articles[0].id);
	});
	
	it('should call resource to create an article', function() {
		suite.articleService.create(articles[0]);
		$httpBackend.flush();
		expect(suite.articleService.articleResource.create).toHaveBeenCalledWith({}, new FormData());
	});
	
	it('should call resource to update the article', function() {
		suite.articleService.update(articles[0]);
		$httpBackend.flush();
		expect(suite.articleService.articleResource.update).toHaveBeenCalledWith({}, new FormData());
	});
	
	it('should call resource to delete the article', function() {
		suite.articleService.delete(articles[1].id);
		$httpBackend.flush();
		expect(suite.articleService.articleResource.delete).toHaveBeenCalledWith({ id: articles[1].id });
	});
});