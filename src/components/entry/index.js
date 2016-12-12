import React from 'react';
import ReactDOM from 'react-dom';

import SpaNavBar from '../navbar'

class Entry extends React.Component {
  render() {
    return (<SpaNavBar />);
  }
}

ReactDOM.render(<Entry/>, document.getElementById('main'));