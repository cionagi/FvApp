import { CALL_API } from '../../config/ApiConnect'
import * as Action from './ActionsTypes'
import { routes } from '../../config/EndPoints'

const getUser = (userId) => ({
  [CALL_API]: {
    types: [Action.GET_USER_REQUEST, Action.GET_USER_SUCCESS, Action.GET_USER_ERROR],
    endpoint: routes.GET_USER.replace('{:userId}', userId),
    method: 'get',
    data: {},
  },
})

export const callGetUser = (userId) => (dispatch) => {
  return dispatch(getUser(userId))
}
