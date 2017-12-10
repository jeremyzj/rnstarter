import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Platform, BackHandler, View } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation'

import Home from '../Views/Home'
import Login from '../Views/Login'
import List from '../Views/List'
import Profile from '../Views/Profile'
import Loading from '../Components/Loading'
import { AppColors, AppSizes } from '../Theme'

const {rem} = AppSizes
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: AppColors.brand.primary
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 17 * rem,
    textAlign: 'center',
  },
  tabBar: {
    borderTopWidth: 0,
    backgroundColor: '#FFF',
    height: 49 * rem,
  },
  labelStyle: {
    fontSize: 10 * rem,
    marginBottom: 5 * rem,
    color: '#888',
    ...Platform.select({
      ios: {},
      android: {
        marginTop: 2 * rem,
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
  nav: state.get('nav'),
  isLoadingShow: state.getIn(['loading','isLoadingShow'])
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
    return (
      <View style={styles.container}>
        <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
        <Loading isVisible={this.props.isLoadingShow}/>
      </View>
    )
  }
}
