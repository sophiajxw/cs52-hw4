import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { authenticated: false };
    this.onSignOut = this.onSignOut.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignOut() {
    this.props.signoutUser();
  }

  onSignIn() {
    if (this.props.authenticated) {
      return <button onClick={this.onSignOut}>Sign Out</button>;
    } else {
      return (
        <div>
          <Link to="/signin">Sign In / </Link>
          <Link to="/signup">Sign Up</Link>
        </div>);
    }
  }

  render() {
    return (
      <nav className="nav_bar">
        <Link to="/">Xinwei Jiang Redux Blog</Link>
        <Link to="/posts/new">New Post</Link>
        {this.onSignIn()}
      </nav>
    );
  }
}


const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { signoutUser })(NavBar);
