import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../reducers/rootReducer';
import SpaRouter from '../router';

ReactDOM.render(
  <Provider store={store}>
    <SpaRouter />
  </Provider>
  , document.getElementById('main'));