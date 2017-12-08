import { AsyncStorage } from 'react-native'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutablejs'
import { persistStore, autoRehydrate } from 'redux-persist-immutable'

import reducers from './Reducers'

export default (onCompletion) => {
  const middleware = [thunk]
  const initialState = Immutable.Map()
  const reducer = combineReducers(reducers)

  console.log('configure store')

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware), autoRehydrate())
  )

  persistStore(store, { storage: AsyncStorage }, onCompletion)
  return store
}