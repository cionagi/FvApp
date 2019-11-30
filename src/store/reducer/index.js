import { combineReducers } from 'redux'
import posts from './posts'
import users from './users'

//reducers
const AppReducer = combineReducers({
  posts,
  users,
})
export default AppReducer
