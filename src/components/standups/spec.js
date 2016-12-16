import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router';

import StandupsPage from './index';

describe('StandupsPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<StandupsPage/>);
  });

  it('renders the header', () => {
    expect(wrapper.find('h1').render().text()).toEqual('Standups');
  });

  it('renders the button to navigate to the new standup form', () => {
    expect(wrapper.find(Link).render().text()).toEqual('Add a New Standup');
    expect(wrapper.find(Link).props().to).toEqual('/standups/new');
    expect(wrapper.find(Link).props().className).toEqual('btn btn-primary');
  });
});
