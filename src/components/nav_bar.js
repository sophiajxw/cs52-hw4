import React from 'react';
import { Link } from 'react-router';

function NavBar(props) {
  return (
    <nav className="nav_bar">
      <Link to="/">Xinwei Jiang Redux Blog</Link>
      <Link to="/posts/new">New Post</Link>
    </nav>
  );
}

export default NavBar;
