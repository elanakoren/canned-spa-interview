import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route} from 'react-router';
import store from '../../reducers/rootReducer';
import { Provider } from 'react-redux';
import HomePage from '../homePage';
import Employees from '../employees';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <Route path="employees" component={Employees}/>
        <Route path="*" component={HomePage}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('main'));