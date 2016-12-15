import React from 'react';
import SpaNavBar from './index';
import Navbar from 'react-bootstrap/lib/Navbar';
import { Link } from 'react-router';

import {shallow} from 'enzyme';

describe('SpaNavBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SpaNavBar />)
  });

  it('renders a Navbar', () => {
    expect(wrapper.find(Navbar).length).toEqual(1);
  });

  it('renders the links', () => {
    expect(wrapper.find(Link).at(0).render().text()).toEqual('Standup');
    expect(wrapper.find(Link).at(0).props().to).toEqual('/');
    expect(wrapper.find(Link).at(1).render().text()).toEqual('Employees');
    expect(wrapper.find(Link).at(1).props().to).toEqual('/employees');
    expect(wrapper.find(Link).at(2).render().text()).toEqual('Standups');
    expect(wrapper.find(Link).at(2).props().to).toEqual('/standups');
  });
});