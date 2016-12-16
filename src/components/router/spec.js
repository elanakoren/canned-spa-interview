import React from 'react';
import { IndexRoute } from 'react-router';
import {shallow} from 'enzyme';

import HomePage from '../homePage';
import App from '../app';
import EmployeesPage from '../employees';
import EmployeesForm from '../employees/new';
import StandupsPage from '../standups';
import StandupsForm from '../standups/new';

import SpaRouter from './index';

describe('SpaRouter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SpaRouter/>);
  });

  describe('/', () => {
    it('renders the App on the route path', () => {
      expect(wrapper.find('[path="/"]').props().component).toEqual(App);
    });

    it('renders the App on the route path index', () => {
      expect(wrapper.find('[path="/"]').find(IndexRoute).at(0).props().component).toEqual(HomePage);
    });

    it('renders the HomePage on the wild card path', () => {
      expect(wrapper.find('[path="*"]').props().component).toEqual(HomePage);
    });

    describe('employees', () => {
      it('renders the EmployeesPage on the /employees path index', () => {
        expect(wrapper.find('[path="employees"]').find(IndexRoute).at(0).props().component).toEqual(EmployeesPage);
      });

      it('renders the EmployeesForm on the /employees/new path', () => {
        expect(wrapper.find('[path="employees"]').find('[path="new"]').at(0).props().component).toEqual(EmployeesForm);
      });
    });

    describe('standups', () => {
      it('renders the StandupsPage on the /standups path index', () => {
        expect(wrapper.find('[path="standups"]').find(IndexRoute).at(0).props().component).toEqual(StandupsPage);
      });

      it('renders the StandupsForm on the /standups/new path', () => {
        expect(wrapper.find('[path="standups"]').find('[path="new"]').at(0).props().component).toEqual(StandupsForm);
      });
    });
  });
});