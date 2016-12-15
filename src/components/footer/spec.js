import React from 'react';
import Footer from './index';

import {shallow} from 'enzyme';

describe('Footer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />)
  });

  it('renders the copyright', () => {
    expect(wrapper.render().text()).toContain('© A Standup Company 2016');
  });
});