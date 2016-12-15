import {makeInactive, makeActive, getAll, createEmployee} from './index';
import fetchHelper from '../../api';

describe('EmployeeActions', () => {
  let dispatchStub;
  beforeEach(() => {
    dispatchStub = jasmine.createSpy('dispatch');
    spyOn(fetchHelper, 'fetch').and.returnValue(Promise.resolve('fetched'));
  });

  describe('getAll', () => {
    it('get to /api/employees', (done) => {
      getAll()(dispatchStub);
      expect(fetchHelper.fetch).toHaveBeenCalledWith('/api/employees');
      fetchHelper.fetch.calls.mostRecent().returnValue.then(() => {
        expect(dispatchStub).toHaveBeenCalledWith({
          type: 'GET_EMPLOYEES',
          employees: 'fetched'
        });
        done();
      });
    });
  });

  describe('createEmployee', () => {
    const employeeData = {
      name: 'jasmine'
    };
    it('post to /api/employees/new', () => {
      createEmployee(employeeData)();
      expect(fetchHelper.fetch).toHaveBeenCalledWith('/api/employees/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
      });
    });
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