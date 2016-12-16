import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import HomePage from '../homePage';
import App from '../app';
import EmployeesPage from '../employees';
import EmployeesForm from '../employees/new';
import StandupsPage from '../standups';
import StandupsForm from '../standups/new';

export default class SpaRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage}/>
          <Route path="employees">
            <IndexRoute component={EmployeesPage}/>
            <Route path="new" component={EmployeesForm}/>
          </Route>
          <Route path="standups">
            <IndexRoute component={StandupsPage}/>
            <Route path="new" component={StandupsForm}/>
          </Route>
          <Route path="*" component={HomePage}/>
        </Route>
      </Router>
    );
  }
}