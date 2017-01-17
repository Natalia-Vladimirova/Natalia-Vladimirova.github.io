import React from 'react';
import AppLayout from './app_layout';
import Article from './article';

import './article-list.less';

class MainPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }
	
    componentWillMount() {
        fetch('//localhost:3000/secure/articles/json')
            .then(res => res.json())
            .then(data => this.setState({
                articles: data	
            }));
    }

	render() {
		return (
			<AppLayout>
				<div id="allArticles" className="all-articles">
					{this.state.articles.map(article => <Article item={article} />)}
				</div>
			</AppLayout>
		);
	}
}

module.exports = MainPage;
