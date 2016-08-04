import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class Index extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (<div className="home">
      <p>My Posts: </p>
      {
        this.props.posts.map(post => {
          return (
            <div key={post.id} className="items">
              <Link to={`/posts/${post.id}`}>
                <span className="title">{post.title}</span>
              </Link>
            </div>
          );
        })
      }
    </div>);
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapStateToProps, { fetchPosts })(Index);
