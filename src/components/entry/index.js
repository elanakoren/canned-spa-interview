import React from 'react';
import ReactDOM from 'react-dom';

class Entry extends React.Component {
  render() {
    return (<h1>Hi Kenny</h1>);
  }
}

ReactDOM.render(<Entry/>, document.getElementById('main'));