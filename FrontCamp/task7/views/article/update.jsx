import React from 'react';
import AppLayout from '../app_layout';

class UpdateForm extends React.Component {
	render() {
		let styles = [ 'article/update.css', 'validate.css' ];

		return (
			<AppLayout title={this.props.title} auth={this.props.auth} styles={styles} >
				<h2>Update the article</h2>
				<h5><a href="/secure/articles/get-user-articles">Back to my articles</a></h5>
				{this.props.error_message && <h3>{this.props.error_message.toLocaleString()}</h3>}
				<form method="post" action="/secure/articles/update" encType="multipart/form-data" className="details">
					<div className="description">
						<input type="hidden" name="id" value={this.props.article._id}/>
						<input type="hidden" name="currentImage" value={this.props.article.image}/>
						<div className="update-line">
							<label htmlFor="title">Title</label>
							<input id="title" name="title" type="text" value={this.props.article.title}/>
						</div>
						<div className="update-line">
							<label htmlFor="image">New image</label>
							<input id="image" name="image" type="file"/>
						</div>
						<div className="update-line">
							<label htmlFor="text">Text</label>
							<textarea id="text" name="text">{this.props.article.text}</textarea>
						</div>
						<div className="update-line">
							<input type="submit" value="Update"/>
						</div>
					</div>
					<div className="image">
						<img src={`/images/${this.props.article.image}`} alt="no picture"/>
					</div>
				</form>
			</AppLayout>
		);
	}
}

module.exports = UpdateForm;
