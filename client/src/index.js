import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from "redux-devtools-extension";

import App from './App';
import reducer from './redux/reducer';

import './index.css';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));
const root = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App/>
        </Router>
    </Provider>,
    root
)
