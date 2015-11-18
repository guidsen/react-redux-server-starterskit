/**
 * Root container.
 * @module containers/Root
 * @author Appfluence
 * @licstart The following is the entire license notice for the JavaScript
 *           code in this page.
 *
 * Copyright (C) 2015 Flex Appeal. All rights reserved.
 *
 * @licence The above is the entire license notice for the JavaScript code in
 *          this page.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ReduxRouter } from 'redux-router';
import { render } from 'react-dom';
import store from '../configureStore';

import LandingPage from '../components/LandingPage';

// Render app
render(
  <Provider store={store}>
      <ReduxRouter>
        <Route path="/" component={LandingPage} />
      </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);
