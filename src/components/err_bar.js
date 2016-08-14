import React, { Component } from 'react';
import { connect } from 'react-redux';

class ErrorBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="err_bar">
        <p>An Error occurred! Please try again! </p>
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => ({});

export default connect(mapDispatchToProps, {})(ErrorBar);
