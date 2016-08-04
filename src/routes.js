import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ShowPost from './containers/show';
import NewPost from './containers/new';
import Index from './containers/index';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts/new" component={NewPost} />
    <Route path="posts/:id" component={ShowPost} />
  </Route>
);
