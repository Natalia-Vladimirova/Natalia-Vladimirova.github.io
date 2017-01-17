import React from 'react';

class Article extends React.Component {
	render() {
		return (
			<div className="article">
				<h3><a href={`/secure/articles/${this.props.item._id}`}>{this.props.item.title}</a></h3>
				{this.props.userArticles &&
					<h6>
						<a href={`/secure/articles/update/${this.props.item._id}`}>Edit</a>
						<i> | </i>
						<a href={`/secure/articles/delete/${this.props.item._id}`}>Delete</a>
					</h6>
				}
				<h5>{this.props.item.date.toLocaleString()}</h5>
				<div className="image"><img src={`/images/${this.props.item.image}`} alt="no picture"/></div>
				<p className="description">{this.props.item.text}</p>
			</div>
		);
	}
}

module.exports = Article;
