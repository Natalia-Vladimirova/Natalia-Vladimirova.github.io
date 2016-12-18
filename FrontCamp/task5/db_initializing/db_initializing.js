db.createCollection("authors")
db.createCollection("articles")
db.createCollection("comments")
db.createCollection("tags")

db.authors.insertMany([
	{
		_id: "1",
		first_name: "Kristina",
		last_name: "Chodorow"
	},
	{
		_id: "2",
		first_name: "Mike",
		last_name: "Dirolf"
	},
	{
		_id: "3",
		first_name: "Andy",
		last_name: "Smith",
		email: "asmith@ex.com"
	}
])

db.articles.insertMany([
	{
		_id: "4",
		header: "Introduction to MongoDb",
		description: "This guide will help you to understand MongoDb",
		publishedAt: ISODate("2009-03-15"),
		authors_id: "1"
	},
	{
		_id: "5",
		header: "MongoDb: The Definitive Guide",
		publishedAt: ISODate("2010-09-24"),
		authors_id: "2"
	},
	{
		_id: "6",
		header: "How to use MongoDb: simple examples",
		description: "Examples of using different MongoDb commands",
		publishedAt: ISODate("2015-02-28"),
		authors_id: "2"
	},
	{
		_id: "7",
		header: "The easiest way of understanding entity framework",
		publishedAt: ISODate("2016-06-08"),
		authors_id: "3"
	}
])

db.articles.createIndex({ header: "text" })

db.comments.insertMany([
	{
		commentatorName: "Jony Quake",
		text: "This is a really good article!",
		articles_id: "4"
	},
	{
		commentatorName: "Mat Smith",
		text: "cool :)",
		articles_id: "5"
	},
	{
		commentatorName: "Jony Quake",
		text: "Useful guide",
		articles_id: "5"
	}
])

db.tags.insertMany([
	{
		name: "MongoDb",
		articles_ids: ["4","5","6"]
	},
	{
		name: "sample",
		articles_ids: ["6"]
	},
	{
		name: "samples",
		articles_ids: ["6"]
	}
])

db.tags.createIndex({ name: 1 })