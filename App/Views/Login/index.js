import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Profile extends Component {

  static navigationOptions = {
    title: '登录'
  }

  render() {
    return (
      <View><Text>Login</Text></View>
    )
  }
}