import React from 'react';
import AppLayout from '../app_layout';

class ReadPage extends React.Component {
	render() {
		return (
			<AppLayout title={this.props.title} auth={this.props.auth} styles={['article/read.css']} >
				<h3>Details</h3>
				<h5><a href="/secure/articles">Back to all articles</a></h5>
				<div className="details">
					<h2>{this.props.article.title}</h2>
					<div className="description">
						<div className="read-line">
							<h6>Creation date:</h6>
							<p>{this.props.article.date.toLocaleString()}</p>
						</div>
						<p className="read-line">{this.props.article.text}</p>
					</div>
					<div className="image">
						<img src={`/images/${this.props.article.image}`} alt="no picture"/>
					</div>
				</div>
			</AppLayout>
		);
	}
}

module.exports = ReadPage;
