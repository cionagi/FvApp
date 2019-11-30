import * as Action from '../actions/ActionsTypes'

const initialState = {
  isFetching: false,
  isLoadingPostInfo: false,
  isLoadingPostComment: false,
  hasError: false,
  list: [],
  post: {},
}

class Posts {
  static reduce(state = initialState, action) {
    if (Posts[action.type]) {
      return Posts[action.type](state, action)
    } else {
      return state
    }
  }

  static [Action.GET_POSTS_REQUEST](state, action) {
    return {
      ...state,
      list: [],
      isFetching: true,
      hasError: false,
    }
  }

  static [Action.GET_POSTS_SUCCESS](state, action) {
    const { response } = action

    return {
      ...state,
      list: [...response],
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

  static [Action.GET_POST_REQUEST](state, action) {
    return {
      ...state,
      post: {},
      isLoadingPostInfo: true,
      hasError: false,
    }
  }

  static [Action.GET_POST_SUCCESS](state, action) {
    const { response } = action
    return {
      ...state,
      post: { ...response, comments: [] },
      isLoadingPostInfo: false,
      hasError: false,
    }
  }

  static [Action.GET_POST_ERROR](state, action) {
    return {
      ...state,
      isLoadingPostInfo: false,
      hasError: true,
    }
  }

  static [Action.GET_COMMENTS_REQUEST](state, action) {
    return {
      ...state,
      isLoadingPostComment: true,
      hasError: false,
      post: {
        ...state.post,
        comments: [],
      },
    }
  }

  static [Action.GET_COMMENTS_SUCCESS](state, action) {
    const { response } = action
    return {
      ...state,
      post: {
        ...state.post,
        comments: [...response],
      },
      isLoadingPostComment: false,
      hasError: false,
    }
  }

  static [Action.GET_COMMENTS_ERROR](state, action) {
    return {
      ...state,
      isLoadingPostComment: false,
      hasError: true,
    }
  }
}

export default Posts.reduce
