import ArticleService from '../app/src/services/article.service';

describe('article service', function () {
	let suite;
	let articles;

	angular.mock.module.sharedInjector();

	beforeEach(inject(function ($injector) {
		suite = {};
		articles = [
			{
				id: 1,
				title: 'test',
				text: 'test text'
			},
			{
				id: 2,
				title: 'test2',
				text: 'test text2'
			}
		];
		
		let $q = $injector.get('$q');
		let promiseAll = $q((resolve, reject) => resolve(articles));
		let promiseGet = $q((resolve, reject) => resolve(articles[0]));
		let promiseOther = $q((resolve, reject) => {});
		
		let resourceMethods = {
			query: function() {},
			get: function() {},
			create: function() {},
			update: function() {},
			delete: function() {}
		};
		
		let $resource = () => { 
			return resourceMethods;
		};

		spyOn(resourceMethods, 'query').and.returnValue({$promise: promiseAll});
		spyOn(resourceMethods, 'get').and.returnValue({$promise: promiseGet});
		spyOn(resourceMethods, 'create').and.returnValue({$promise: promiseOther});
		spyOn(resourceMethods, 'update').and.returnValue({$promise: promiseOther});
		spyOn(resourceMethods, 'delete').and.returnValue({$promise: promiseOther});
		
		suite.$resource = $resource;
		suite.articleService = new ArticleService($resource);
	}));

	afterEach(function(){
		suite = null;
	});

	it('should call resource to get all articles', function () {
		let success = jasmine.createSpy('success');
		
		suite.articleService.getAll().then(success);
		expect(suite.$resource().query).toHaveBeenCalled();
		
		expect(suite.$resource().get).not.toHaveBeenCalled();
		expect(suite.$resource().create).not.toHaveBeenCalled();
		expect(suite.$resource().update).not.toHaveBeenCalled();
		expect(suite.$resource().delete).not.toHaveBeenCalled();
		
		//expect(success).toHaveBeenCalledWith(articles);
	});
	
	it('should call resource to get one article', function () {
		suite.articleService.get(1);
		expect(suite.$resource().get).toHaveBeenCalledWith({ id: 1 });
		
		expect(suite.$resource().query).not.toHaveBeenCalled();
		expect(suite.$resource().create).not.toHaveBeenCalled();
		expect(suite.$resource().update).not.toHaveBeenCalled();
		expect(suite.$resource().delete).not.toHaveBeenCalled();
	});
	
	it('should call resource to create an article', function () {
		suite.articleService.create(articles[0]);
		expect(suite.$resource().create).toHaveBeenCalledWith({}, new FormData());
		
		expect(suite.$resource().query).not.toHaveBeenCalled();
		expect(suite.$resource().get).not.toHaveBeenCalled();
		expect(suite.$resource().update).not.toHaveBeenCalled();
		expect(suite.$resource().delete).not.toHaveBeenCalled();
	});
	
	it('should call resource to update the article', function () {
		suite.articleService.update(articles[0]);
		expect(suite.$resource().update).toHaveBeenCalledWith({}, new FormData());
		
		expect(suite.$resource().query).not.toHaveBeenCalled();
		expect(suite.$resource().get).not.toHaveBeenCalled();
		expect(suite.$resource().create).not.toHaveBeenCalled();
		expect(suite.$resource().delete).not.toHaveBeenCalled();
	});
	
	it('should call resource to delete the article', function () {
		suite.articleService.delete(2);
		expect(suite.$resource().delete).toHaveBeenCalledWith({ id: 2 });
		
		expect(suite.$resource().query).not.toHaveBeenCalled();
		expect(suite.$resource().get).not.toHaveBeenCalled();
		expect(suite.$resource().create).not.toHaveBeenCalled();
		expect(suite.$resource().update).not.toHaveBeenCalled();
	});
});