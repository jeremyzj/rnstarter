/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutablejs'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, autoRehydrate } from 'redux-persist-immutable'
import AppWithNavigationState from './Navigation/AppNavigation'
import reducers from './Reducers'
import configureStore from './ConfigrueStore'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    }
  }
  render() {
    const { isLoading, store } = this.state

    return isLoading
      ? null
      : <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
  }
}
