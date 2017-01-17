import React from 'react';
import { Link } from 'react-router';
import AppLayout from '../app_layout';

import './read.less';

class ReadPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            article: []
        };
    }
	
    componentWillMount() {
		let id = this.props.params.id;
		
        fetch(`//localhost:3000/secure/articles/${id}/json`)
            .then(res => res.json())
            .then(data => {console.log(data);this.setState({
                article: data	
            })});
    }
	
	render() {
		return (
			<AppLayout>
				<h2>Details</h2>
				<h5><Link to="/articles">Back to all articles</Link></h5>
				<div className="details">
					<h2>{this.state.article.title}</h2>
					<div className="description">
						<div className="read-line">
							<h6>Creation date:</h6>
							<p>{this.state.article.date}</p>
						</div>
						<p className="read-line">{this.state.article.text}</p>
					</div>
					<div className="image">
						<img src={`http://localhost:3000/images/${this.state.article.image}`} alt="no picture"/>
					</div>
				</div>
			</AppLayout>
		);
	}
}

module.exports = ReadPage;
