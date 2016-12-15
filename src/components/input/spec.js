import React from 'react';
import Input from './index';

import {shallow} from 'enzyme';

describe('Input', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      label: 'label',
      value: 123,
      type: 'text'
    };
    wrapper = shallow(<Input {...props} />)
  });

  it('renders the provided label', () => {
    expect(wrapper.find('label').render().text()).toEqual('label');
  });

  it('passes through the other props to the input', () => {
    expect(wrapper.find('input').props().value).toEqual(123);
    expect(wrapper.find('input').props().type).toEqual('text');
  });
});