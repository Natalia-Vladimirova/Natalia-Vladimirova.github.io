db.authors.deleteOne({
	$or: [ 
		{ last_name: { $eq: "author" } }, 
		{ last_name: { $eq: "author2" } } 
	]
})