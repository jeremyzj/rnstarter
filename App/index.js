/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import AppWithNavigationState from './Navigation/AppNavigation'
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
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
          />
          <AppWithNavigationState />
        </View>
      </Provider>
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
