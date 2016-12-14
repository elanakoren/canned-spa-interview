import employeeActions from './index';
import fetchHelper from '../../api';

describe('EmployeeActions', () => {
  beforeEach(() => {
    spyOn(fetchHelper, 'fetch').and.returnValue('fetched');
  });

  describe('makeInactive', () => {
    it('put to /api/employees/:id/inactive', () => {
      employeeActions.makeInactive('employeeId')();
      expect(fetchHelper.fetch).toHaveBeenCalledWith('/api/employees/employeeId/inactive', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    });
  });
});