import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<h1><a href="/">Blog</a></h1>
				<div className="menu-buttons">
					{this.props.auth ? (
						<div>
							<a href="/auth/logout" className="button">Logout</a>
							<a href="/secure/articles/create" className="button">Create an article</a>
							<a href="/secure/articles/get-user-articles" className="button">My articles</a>
						</div>
					) : (
						<div>
							<a href="/auth/register" className="button">Register</a>
							<a href="/auth/login" className="button">Login</a>
						</div>
					)}
				</div>
			</div>
		);
	}
}

module.exports = Header;
