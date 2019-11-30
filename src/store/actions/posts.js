import { CALL_API } from '../../config/ApiConnect'
import * as Action from './ActionsTypes'
import { routes } from '../../config/EndPoints'

const getPosts = () => ({
  [CALL_API]: {
    types: [Action.GET_POSTS_REQUEST, Action.GET_POSTS_SUCCESS, Action.GET_POSTS_ERROR],
    endpoint: routes.GET_POSTS,
    method: 'get',
    data: {},
  },
})

const getPost = (postId) => ({
  [CALL_API]: {
    types: [Action.GET_POST_REQUEST, Action.GET_POST_SUCCESS, Action.GET_POST_ERROR],
    endpoint: routes.GET_POST.replace('{:postId}', postId),
    method: 'get',
    data: {},
  },
})

const getCommentByPost = (postId) => ({
  [CALL_API]: {
    types: [Action.GET_COMMENTS_REQUEST, Action.GET_COMMENTS_SUCCESS, Action.GET_COMMENTS_ERROR],
    endpoint: routes.GET_COMMENTS.replace('{:postId}', postId),
    method: 'get',
    data: {},
  },
})

export const callGetPosts = () => (dispatch) => {
  return dispatch(getPosts())
}

export const callGetPost = (postId) => (dispatch) => {
  return dispatch(getPost(postId))
}

export const callGetCommentByPost = (postId) => (dispatch) => {
  return dispatch(getCommentByPost(postId))
}
