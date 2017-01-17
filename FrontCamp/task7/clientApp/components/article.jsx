import React from 'react';
import { Link } from 'react-router';

class Article extends React.Component {
	render() {
		return (
			<div className="article">
				<h3><Link to={`/articles/${this.props.item._id}`}>{this.props.item.title}</Link></h3>
				<h5>{this.props.item.date}</h5>
				<div className="image"><img src={`http://localhost:3000/images/${this.props.item.image}`} alt="no picture"/></div>
				<p className="description">{this.props.item.text}</p>
			</div>
		);
	}
}

module.exports = Article;
