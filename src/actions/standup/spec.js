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
});