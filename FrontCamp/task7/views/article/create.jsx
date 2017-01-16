import React from 'react';
import AppLayout from '../app_layout';

class CreateForm extends React.Component {
	render() {
		let styles = [ 'article/create.css', 'validate.css' ];

		return (
			<AppLayout title={this.props.title} auth={this.props.auth} styles={styles} >
				<h2>Create an article</h2>
				<h5><a href="/secure/articles/get-user-articles">Back to my articles</a></h5>
				{this.props.error_message && <h3>{this.props.error_message.toLocaleString()}</h3>}
				<form method="post" action="/secure/articles/create" encType="multipart/form-data">
					<div className="create-line">
						<label htmlFor="title">Title</label>
						<input id="title" name="title" type="text" value={this.props.article ? this.props.article.title : ''} />
					</div>
					<div className="create-line">
						<label htmlFor="image">Image</label>
						<input id="image" name="image" type="file"/>
					</div>
					<div className="create-line">
						<label htmlFor="text">Text</label>
						<textarea id="text" name="text" value={this.props.article ? this.props.article.text : ''}></textarea>
					</div>
					<div className="create-line">
						<input type="submit" value="Create"/>
					</div>
				</form>
			</AppLayout>
		);
	}
}

module.exports = CreateForm;
