import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import ListFocusImg from '../../Images/list_focus.png'
import ListNormalImg from '../../Images/list_normal.png'

export default class List extends Component {

  static navigationOptions = {
    title: '列表',
    tabBarIcon: ({ focused }) => <Image source={focused ? ListFocusImg : ListNormalImg} style={[{ marginBottom: 1 }]} />,      
  }

  render() {
    return (
      <View><Text>List</Text></View>
    )
  }
}