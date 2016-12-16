import {getAll} from './index';
import fetchHelper from '../../api';

describe('StandupActions', () => {
  let dispatchStub;
  beforeEach(() => {
    dispatchStub = jasmine.createSpy('dispatch');
    spyOn(fetchHelper, 'fetch').and.returnValue(Promise.resolve('fetched'));
  });

  describe('getAll', () => {
    it('get to /api/standups', (done) => {
      getAll()(dispatchStub);
      expect(fetchHelper.fetch).toHaveBeenCalledWith('/api/standups');
      fetchHelper.fetch.calls.mostRecent().returnValue.then(() => {
        expect(dispatchStub).toHaveBeenCalledWith({
          type: 'GET_STANDUPS',
          standups: 'fetched'
        });
        done();
      });
    });
  });

  describe('createStandup', () => {
    it('post to /api/standups/new', () => {
      createStandup('2016-10-10')(dispatchStub);
      expect(fetchHelper.fetch).toHaveBeenCalledWith('/api/standups/new', {
        headers: {
          contentType: 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({date: '2016-10-10'})
      });
    });
  });
});