import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';

import routes from './routes';

import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import configureStore from './store/configureStore';

// const store = configureStore();

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
