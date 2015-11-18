/**
 * Configure store helper.
 * @module configureStore
 * @author Appfluence
 * @licstart The following is the entire license notice for the JavaScript
 *           code in this page.
 *
 * Copyright (C) 2015 Appfluence. All rights reserved.
 *
 * @licence The above is the entire license notice for the JavaScript code in
 *          this page.
 */
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';

const loggerMiddleware = createLogger();

const store = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    reduxReactRouter({ createHistory })
)(createStore)(rootReducer, {});

export default store;
