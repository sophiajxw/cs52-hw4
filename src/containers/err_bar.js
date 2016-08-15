import React, { Component } from 'react';
import { connect } from 'react-redux';

class ErrorBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.error) {
      return (
        <div className="err_bar">
          <p>An Error occurred! Please try again! </p>
          <p>{this.props.error}</p>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

const mapStateToProps = (state) => ({ error: state.error.message });

export default connect(mapStateToProps, {})(ErrorBar);
