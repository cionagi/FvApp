import { combineReducers } from 'redux'
import posts from './posts'
//reducers
const AppReducer = combineReducers({
  posts,
})
export default AppReducer
