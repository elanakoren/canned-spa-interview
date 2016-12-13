import React from 'react';
import {shallow} from 'enzyme';

import App from './index';
import SpaNavBar from '../navbar'
import Footer from '../footer'


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App><span className="test-child" /></App>)
  });

  it('renders the navbar', () => {
    expect(wrapper.find(SpaNavBar).length).toEqual(1);
  });

  it('renders the children', () => {
    expect(wrapper.find('.test-child').length).toEqual(1);
  });

  it('renders the footer', () => {
    expect(wrapper.find(Footer).length).toEqual(1);
  });
});