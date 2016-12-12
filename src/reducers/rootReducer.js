import { createStore, combineReducers } from 'redux';

function employees(state = {}, action) {
  switch (action.type) {
    case 'CREATE_EMPLOYEE':
      return {
        ...state,
        [action.employee.id]: action.employee
      };
    default:
      return state
  }
}

let standup = combineReducers({
  employees,
});

let store = createStore(standup, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({
  type: 'CREATE_EMPLOYEE',
  employee:  {
    'id': 'driulis-gonzalez',
    'name': 'Driulis González',
    'start_date': 'January 1st 2015 ',
    'active': true,
    'email': 'driulis@mail.com',
    'mobile': '14151234567',
  }
});

console.log(store.getState());

module.exports = store;