import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions';
import { Link } from 'react-router';

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmitChange(event) {
    const fields = {
      email: this.state.email,
      password: this.state.password,
    };
    event.preventDefault();
    this.props.signinUser(fields);
    console.log(fields);
  }

  render() {
    return (
      <div className="signin">
        <h>Sign In: </h>
        <input className="input" onChange={this.onEmailChange} value={this.state.email} placeholder="email" />
        <input className="input" onChange={this.onPasswordChange} value={this.state.password} placeholder="password" />
        <div className="Button">
          <span><button onClick={this.onSubmitChange}>Submit</button></span>
          <Link to="/"><button>Cancel</button></Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { signinUser })(Signin);
