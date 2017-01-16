import React from 'react';

class Layout extends React.Component {
  render() {
    return (
		<html>
			<head>
				<meta content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="stylesheet" type="text/css" href="/stylesheets/app.css" />
				{this.props.styles &&
					this.props.styles.map(style => <link rel="stylesheet" type="text/css" href={`/stylesheets/${style}`} />)
				}
				<title>{this.props.title}</title>
			</head>
			<body>
				<div className="container">
					{this.props.children}
				</div>
			</body>
		</html>
    );
  }
}

module.exports = Layout;
