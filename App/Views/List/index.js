import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import {ListFocusImg , ListNormalImg} from '../../Images'

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