/**
 * Root reducer.
 * @module reducers/index
 * @author Appfluence
 * @licstart The following is the entire license notice for the JavaScript
 *           code in this page.
 *
 * Copyright (C) 2015 Appfluence. All rights reserved.
 *
 * @licence The above is the entire license notice for the JavaScript code in
 *          this page.
 */
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import functions from './functions';

// Combine reducers
const rootReducer = combineReducers({
  router: routerStateReducer,
  functions,
});

export default rootReducer;
