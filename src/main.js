import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, RouterContext, browserHistory } from 'react-router';

import configureStore from './store';
import { routes } from './routes';

import 'sanitize.css/sanitize.css';
import 'assets/styles/styles.css';

// Create redux store
const initialState = {};
const store = configureStore(initialState);

const createElement = props => {
    return (
        <Provider store={store}>
            <RouterContext {...props} />
        </Provider>
    );
};

const root = (
    <Router history={browserHistory}
            render={createElement}
            routes={routes}/>
);

ReactDOM.render(root, document.querySelector('main'));
