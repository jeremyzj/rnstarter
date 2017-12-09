import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import HomeFocusImg from '../../Images/home_focus.png'
import HomeNormalImg from '../../Images/home_normal.png'

export default class Home extends Component {

  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ focused }) => <Image source={focused ? HomeFocusImg : HomeNormalImg} style={[{ marginBottom: 1 }]} />,   
  }

  render() {
    return (
      <View><Text>Home</Text></View>
    )
  }
}