import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

function arrayToObject(data) {
  let obj = {};
  data.forEach((datum) => {
    obj[datum.id] = datum
  });
  return obj;
}

function employees(state = {}, action) {
  switch (action.type) {
    case 'CREATE_EMPLOYEE':
      return {
        ...state,
        [action.employee.id]: action.employee
      };
    case 'GET_EMPLOYEES':
      return {
        ...state,
        ...arrayToObject(action.employees)
      };
    default:
      return state
  }
}

let standup = combineReducers({
  employees,
});


module.exports = compose(applyMiddleware(thunk))(createStore)(standup, {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());