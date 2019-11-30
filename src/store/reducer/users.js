import * as Action from '../actions/ActionsTypes'

const initialState = {
  isFetching: false,
  hasError: false,
  posts: {},
}

class Users {
  static reduce(state = initialState, action) {
    if (Users[action.type]) {
      return Users[action.type](state, action)
    } else {
      return state
    }
  }

  static [Action.GET_USER_REQUEST](state, action) {
    return {
      ...state,
      posts: [],
      isFetching: true,
      hasError: false,
    }
  }

  static [Action.GET_USER_SUCCESS](state, action) {
    const { response } = action

    return {
      ...state,
      posts: [...response],
      isFetching: false,
      hasError: false,
    }
  }

  static [Action.GET_USER_ERROR](state, action) {
    return {
      ...state,
      isFetching: false,
      hasError: true,
    }
  }
}

export default Users.reduce
