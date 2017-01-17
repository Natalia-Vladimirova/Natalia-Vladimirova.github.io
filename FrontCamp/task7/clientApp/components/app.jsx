import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import './app.less';

import MainPage from './index';
import ReadPage from './article/read';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={MainPage} />
		<Route path="/articles" component={MainPage} />
		<Route path="/articles/:id" component={ReadPage} />
	</Router>
), document.getElementById('root'))
