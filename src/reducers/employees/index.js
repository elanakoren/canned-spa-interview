import arrayToObject from '../../helpers/array-to-object';

export default function employees(state = {}, action) {
  switch (action.type) {
    case 'CREATE_EMPLOYEE':
      return {
        ...state,
        [action.employee.id]: action.employee
      };
    case 'GET_EMPLOYEES':
      return {
        ...arrayToObject(action.employees)
      };
    default:
      return state
  }
}