import React from 'react';
import {browserHistory} from 'react-router';
import {StandupForm} from './index';
import moment from 'moment';
import {shallow} from 'enzyme';
import standupActions from '../../../actions/standup';

describe('StandupForm', () => {
  let wrapper;
  let dispatchStub;
  beforeEach(() => {
    dispatchStub = jasmine.createSpy('dispatch').and.returnValue(Promise.resolve());
    spyOn(standupActions, 'createStandup');
    spyOn(browserHistory, 'push');

    wrapper = shallow(<StandupForm dispatch={dispatchStub}/>);
  });

  it('renders a form to make a new standup', () => {
    var todaysDate = moment().format('YYYY-MM-DD');
    expect(wrapper.find('input').props().defaultValue).toEqual(todaysDate);
  });


  describe('submitting the form', () => {
    it('sends an action to create a standup with the new date', (done) => {
      const updatedDate = '2017-01-01';
      wrapper.find('input').simulate('change', {target: {value: updatedDate}});
      wrapper.update();
      expect(wrapper.find('input').props().defaultValue).toEqual(updatedDate);

      wrapper.find('button').simulate('click');
      expect(standupActions.createStandup).toHaveBeenCalledWith(updatedDate);
      expect(dispatchStub).toHaveBeenCalled();
      dispatchStub.calls.mostRecent().returnValue.then(() => {
        expect(browserHistory.push).toHaveBeenCalledWith('/standups');
        done();
      });
    });
  });
});