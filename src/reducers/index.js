import { combineReducers } from 'redux';

import PostsReducer from './posts-reducer';

import AuthReducer from './auth-reducer';

import ErrReducer from './err-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
  error: ErrReducer,
});

export default rootReducer;
