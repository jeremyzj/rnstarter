import { AsyncStorage } from 'react-native'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutablejs'
import { persistStore, autoRehydrate } from 'redux-persist-immutable'
import NetworkMiddleware from './Networks/NetworkMiddleware'

import reducers from './Reducers'

export default (onCompletion) => {
  const middleware = [thunk]
  middleware.push(NetworkMiddleware)
  const initialState = Immutable.Map()
  const reducer = combineReducers(reducers)

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware), autoRehydrate())
  )

  persistStore(store, { storage: AsyncStorage, whitelist: ['loginInfo'] }, onCompletion)
  return store
}