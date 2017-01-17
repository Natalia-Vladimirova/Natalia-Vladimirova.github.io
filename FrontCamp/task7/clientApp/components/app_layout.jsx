import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';

class AppLayout extends React.Component {
  render() {
    return (
		<div>
			<Header />
			<div className="content">{this.props.children}</div>
			<Footer />
		</div>
    );
  }
}

module.exports = AppLayout;
