import React from 'react';
import {Link} from 'react-router';
import {shallow} from 'enzyme';

import {EmployeesPage} from './index';
import EmployeeItem from './employee_item';
import employeeActions from '../../actions/employee';

describe('EmployeesPage', () => {
  let wrapper;
  let dispatchStub;
  beforeEach(() => {
    let employees = {
      1: {
        id: 1,
        name: 'jasmine',
        email: 'jasmine@email.com',
        active: true
      },
      2: {
        id: 2,
        name: 'inactive_1',
        email: 'jasmine@email.com',
        active: false
      }
    };
    dispatchStub = jasmine.createSpy('dispatch').and.callFake(() => Promise.resolve());
    spyOn(employeeActions, 'getAll');
    spyOn(employeeActions, 'makeActive');
    spyOn(employeeActions, 'makeInactive');
    wrapper = shallow(<EmployeesPage employees={employees} dispatch={dispatchStub}/>)
  });

  it('renders the header', () => {
    expect(wrapper.find('h1').render().text()).toEqual('Employees');
  });

  it('fetches the employees', () => {
    wrapper.instance().componentDidMount();
    expect(dispatchStub).toHaveBeenCalled();
    expect(employeeActions.getAll).toHaveBeenCalled();
  });

  it('renders the page', () => {
    expect(wrapper.render().text()).toContain('Employees');
    expect(wrapper.render().text()).toContain('jasmine');
    expect(wrapper.render().text()).not.toContain('inactive_1');
  });

  it('dispatches an employee action to deactivate an account', () => {
    wrapper.find(EmployeeItem).simulate('click');
    expect(dispatchStub).toHaveBeenCalled();
    expect(employeeActions.makeInactive).toHaveBeenCalledWith(1);
  });

  it('renders a link to the new employee form', () => {
    expect(wrapper.find(Link).render().text()).toEqual('Add a New Employee');
    expect(wrapper.find(Link).props().to).toEqual('/employees/new');
    expect(wrapper.find(Link).props().className).toEqual('btn btn-primary');
  });

  describe('inactive employees', () => {
    beforeEach(() => {
      wrapper.find('.toggle-active').simulate('click');
    });

    it('toggles the active employees', () => {
      expect(wrapper.render().text()).toContain('inactive_1');
      expect(wrapper.render().text()).toContain('jasmine');
    });

    it('dispatches an employee action to deactivate an account', () => {
      dispatchStub.calls.reset();
      wrapper.find(EmployeeItem).at(1).simulate('click');
      expect(dispatchStub).toHaveBeenCalled();
      expect(employeeActions.makeActive).toHaveBeenCalledWith(2);
    });
  });

});