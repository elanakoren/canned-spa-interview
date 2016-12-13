import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import store from '../../reducers/rootReducer';
import { Provider } from 'react-redux';
import HomePage from '../homePage';
import App from '../app';
import Employees from '../employees';
import NewEmployeePage from '../employees/new';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="employees">
          <IndexRoute component={Employees}/>
          <Route path="new" component={NewEmployeePage}/>
        </Route>
        <Route path="*" component={HomePage}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('main'));