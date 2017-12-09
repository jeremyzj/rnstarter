import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Platform, BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation'

import Home from '../Views/Home'
import Login from '../Views/Login'
import List from '../Views/List'
import Profile from '../Views/Profile'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3F3F3F'
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 17,
    textAlign: 'center',
  },
  tabBar: {
    borderTopWidth: 0,
    backgroundColor: '#FFF',
    height: 49,
  },
  labelStyle: {
    fontSize: 10,
    marginBottom: 5,
    color: '#888',
    ...Platform.select({
      ios: {},
      android: {
        marginTop: 2,
      },
    })
  },
  tabStyle: {
    borderBottomWidth: 0,
  },
  indicatorStyle: {
    backgroundColor: 'transparent'
  }
})

const tabs = {
  Home: { screen: Home },
  List: { screen: List },
  Profile: {screen: Profile}
}

const tabsConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  lazy: true,
  initialRouteName: 'Home',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#02D04E',
    labelStyle: styles.labelStyle,
    style: styles.tabBar,
    tabStyle: styles.tabStyle,
    indicatorStyle: styles.indicatorStyle
  }
}

const Tab = TabNavigator(tabs, tabsConfig)

const routes = {
  Main: { screen: Tab },
  Login: { screen: Login}
}

const stackConfig = {
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerBackTitle: null,
    headerTintColor: '#FFF',
  }
}

export const AppNavigator = StackNavigator(routes, stackConfig)

const mapStateToProps = state => ({
  nav: state.get('nav')
})

@connect(mapStateToProps)
export default class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { dispatch, nav } = this.props

    BackHandler.addEventListener('hardwareBackPress', () => {
      if (nav.routes.length === 1) {
        return false
      }

      dispatch({ type: 'Navigation/BACK' })
      return true
    })
  }

  render() {
    const { dispatch, nav } = this.props
    return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  }
}
