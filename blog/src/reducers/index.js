import { combineReducers } from 'redux'

import postReducers from './postsReducer'
import userReducer from './userReducer'

export default combineReducers({
  posts: postReducers,
  users: userReducer
})