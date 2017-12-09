import utils from '../Utils'
import Immutable from 'immutable'

export const types = {
  SHOW: 'Loading.SHOW'
}

export const setters = {
  [types.SHOW]: utils.createSetter(types.SHOW, 'isLoadingShow')
}

const initialState = Immutable.fromJS({
  isLoadingShow: false,
})

export default (state = initialState, action) => (setters[action.type]
  ? state.set(action.key, action.payload)
  : state)