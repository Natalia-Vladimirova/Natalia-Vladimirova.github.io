db.authors.updateOne(
	{ first_name: { $eq: "Another" } },
	{ $set: { last_name: "author2" } }
)