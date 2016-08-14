import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ShowPost from './containers/show';
import NewPost from './containers/new';
import Index from './containers/index';
import Signin from './containers/sign_in';
import Signup from './containers/sign_up';
import RequireAuth from './containers/require-auth';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts/new" component={RequireAuth(NewPost)} />
    <Route path="posts/:id" component={ShowPost} />
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
  </Route>
);
