import React from 'react';
import AppLayout from '../app_layout';

class DeleteForm extends React.Component {
	render() {
		return (
			<AppLayout title={this.props.title} auth={this.props.auth} styles={['article/delete.css']} >
				<form method="post" action="/secure/articles/delete" className="details">
					<div className="question">
						<h3>Are you sure you want to delete the article?</h3>
						<input type="submit" value="Delete" className="button" />
						<a href="/secure/articles/get-user-articles" className="button">Cancel</a>
					</div>
					<input type="hidden" name="id" value={this.props.article._id} />
					<input type="hidden" name="image" value={this.props.article.image} />
					<h2>{this.props.article.title}</h2>
					<div className="description">
						<div className="read-line">
							<h6>Creation date:</h6>
							<p>{this.props.article.date.toLocaleString()}</p>
						</div>
						<p className="read-line">{this.props.article.text}</p>
					</div>
					<div className="image">
						<img src={`/images/${this.props.article.image}`} alt="no picture" />
					</div>
				</form>
			</AppLayout>
		);
	}
}

module.exports = DeleteForm;
