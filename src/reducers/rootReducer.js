import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import employees from './employees';
import standups from './standups';

let standup = combineReducers({
  employees,
  standups,
});


module.exports = compose(applyMiddleware(thunk))(createStore)(standup, {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());