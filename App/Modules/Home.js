import Immutable from 'immutable'
import {actionTypes} from '../Networks/NetworkConfig'

export const types = {
  REPO: 'Home.Repo',
  NUMBER: 'Home.Number'
}

export const actions = {
  [types.REPO] :() =>  ({
    type: types.REPO,
    path: 'user/repos',
    requestType: actionTypes.GET,
    key: 'repos'
  }),
  [types.NUMBER]:(number) => ({
    type: types.NUMBER,
    payload: number,
    key: 'number'
  })
}


const initialState = Immutable.fromJS({
  repos: [],
  number : 0
})

export default (state = initialState, action) => (actions[action.type]
  ? state.set(action.key, action.payload)
  : state)
