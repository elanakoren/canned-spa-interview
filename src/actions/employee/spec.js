import {makeInactive, makeActive} from './index';
import fetchHelper from '../../api';

describe('EmployeeActions', () => {
  beforeEach(() => {
    spyOn(fetchHelper, 'fetch').and.returnValue('fetched');
  });

  describe('makeInactive', () => {
    it('put to /api/employees/:id/active/false', () => {
      makeInactive('employeeId')();
      expect(fetchHelper.fetch).toHaveBeenCalledWith('/api/employees/employeeId/active/false', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    });
  });

  describe('makeActive', () => {
    it('put to /api/employees/:id/active/true', () => {
      makeActive('employeeId')();
      expect(fetchHelper.fetch).toHaveBeenCalledWith('/api/employees/employeeId/active/true', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    });
  });
});