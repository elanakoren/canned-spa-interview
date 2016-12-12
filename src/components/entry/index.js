import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../reducers/rootReducer';
import { Provider } from 'react-redux';

import SpaNavBar from '../navbar'

class Entry extends React.Component {
  render() {
    return (<SpaNavBar />);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Entry/>
  </Provider>
  , document.getElementById('main'));