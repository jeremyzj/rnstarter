import Immutable from 'immutable'
import {actionTypes} from '../Networks/NetworkConfig'

export const types = {
  REPO: 'Home.Repo'
}

export const actions = {
  [types.REPO] :() =>  ({
    type: types.REPO,
    path: 'user/repos',
    requestType: actionTypes.GET,
    key: 'repos'
  })
}


const initialState = Immutable.fromJS({
  repos: []
})

export default (state = initialState, action) => (actions[action.type]
  ? state.set(action.key, action.payload)
  : state)
