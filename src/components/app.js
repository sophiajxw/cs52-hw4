import React, { Component } from 'react';
import NavBar from './nav_bar';
import ErrorBar from '../containers/err_bar';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <ErrorBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
