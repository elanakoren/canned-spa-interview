import React from 'react';
import EmployeeItem from './index';

import {shallow} from 'enzyme';

describe('EmployeeItem', () => {
  let wrapper;
  let clickSpy;
  beforeEach(() => {
    clickSpy = jasmine.createSpy('click');
    const props = {
      onClick: clickSpy,
      text: 'ipsum',
      employee: {
        name: 'jasmine'
      }
    };
    wrapper = shallow(<EmployeeItem {...props} />)
  });

  it('renders the employee name', () => {
    expect(wrapper.render().text()).toContain('jasmine');
  });

  it('renders the link text', () => {
    expect(wrapper.find('a').render().text()).toEqual('ipsum');
  });

  it('calls the onClick callback', () => {
    wrapper.find('a').simulate('click');
    expect(clickSpy).toHaveBeenCalled();
  });
});