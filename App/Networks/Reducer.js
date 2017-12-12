import {actionTypes} from './NetworkConfig'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({ 
  error: null
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ERROR:  return state.set('error', action.error)
    default: return state
  }
}
