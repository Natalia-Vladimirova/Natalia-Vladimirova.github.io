import React from 'react';
import Layout from './layout/layout';
import Header from './layout/header';
import Footer from './layout/footer';

class AppLayout extends React.Component {
  render() {
    return (
		<Layout title={this.props.title} styles={this.props.styles} >
			<Header auth={this.props.auth} />
			<div className="content">{this.props.children}</div>
			<Footer />
		</Layout>
    );
  }
}

module.exports = AppLayout;
