import React from 'react';
import {Link} from 'react-router';
import HomePage from './index';
import {shallow} from 'enzyme';

describe('HomePage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  });

  it('renders the employees link', () => {
    expect(wrapper.find(Link).at(0).render().text()).toEqual('View Employees');
    expect(wrapper.find(Link).at(0).props().to).toEqual('/employees');
  });

  it('renders the standups link', () => {
    expect(wrapper.find(Link).at(1).render().text()).toEqual('View Standups');
    expect(wrapper.find(Link).at(1).props().to).toEqual('/standups');
  });
});