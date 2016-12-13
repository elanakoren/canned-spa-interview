import React from 'react';

import SpaNavBar from '../navbar'
import Footer from '../footer'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SpaNavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}