import React from 'react';
import AppLayout from './app_layout';

class ErrorPage extends React.Component {
  render() {
    return (
		<AppLayout title={this.props.title}>
			<h2>{this.props.message}</h2>
			<h3>{this.props.error.status}</h3>
		</AppLayout>
    );
  }
}

module.exports = ErrorPage;
