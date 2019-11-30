import * as Action from '../actions/ActionsTypes'

const initialState = {
  isFetching: false,
  hasError: false,
  list: [],
}

class Post {
  static reduce(state = initialState, action) {
    if (Post[action.type]) {
      return Post[action.type](state, action)
    } else {
      return state
    }
  }

  static [Action.GET_POSTS_REQUEST](state, action) {
    return {
      ...state,
      isFetching: true,
      hasError: false,
    }
  }

  static [Action.GET_POSTS_SUCCESS](state, action) {
    const { response } = action
    return {
      ...state,
      isFetching: false,
      hasError: false,
    }
  }

  static [Action.GET_POSTS_ERROR](state, action) {
    return {
      ...state,
      isFetching: false,
      hasError: true,
    }
  }
}

export default Post.reduce
