import React from 'react';
import AppLayout from './app_layout';

class AuthForm extends React.Component {
	render() {
		let styles = [ 'article/create.css', 'validate.css' ];
		
		return (
			<AppLayout title={this.props.title} auth={this.props.auth} styles={styles} >
				<h2>{this.props.message}</h2>
				{this.props.error_message && <h3>{this.props.error_message.toLocaleString()}</h3>}
				<form method="post" action={`/auth/${this.props.auth_type}`}>
					<input type="hidden" name="returnUrl" value={this.props.returnUrl} />
					<div className="create-line">
						<label htmlFor="username">Name</label>
						<input name="username" id="username" type="text" value={this.props.username} />
					</div>
					<div className="create-line">
						<label htmlFor="password">Password</label>
						<input name="password" id="password" type="password"/>
					</div>
					<div className="create-line">
						<input type="submit" value={this.props.title} />
					</div>
				</form>
			</AppLayout>
		);
	}
}

module.exports = AuthForm;
