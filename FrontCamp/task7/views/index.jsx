import React from 'react';
import AppLayout from './app_layout';
import Article from './article';

class MainPage extends React.Component {
	render() {
		return (
			<AppLayout title={this.props.title} auth={this.props.auth} styles={['article-list.css']} >
				<div id="allArticles" className="all-articles">
					{this.props.articles.map(article => <Article item={article} userArticles={this.props.userArticles} />)}
				</div>
			</AppLayout>
		);
	}
}

module.exports = MainPage;
