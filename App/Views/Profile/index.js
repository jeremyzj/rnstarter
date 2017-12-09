import React, {Component} from 'react'
import {View, Text, Button, Image} from 'react-native'
import ProfileFocusImg from '../../Images/profile_focus.png'
import ProfileNormalImg from '../../Images/profile_normal.png'

export default class Profile extends Component {

  static navigationOptions = {
    title: '个人中心',
    tabBarIcon: ({ focused }) => <Image source={focused ? ProfileFocusImg : ProfileNormalImg} style={[{ marginBottom: 1 }]} />,          
  }

  _login() {
    const {navigation} = this.props
    navigation && navigation.navigate('Login')
  }

  render() {
    return (
      <View>
        <Text>Profile</Text>
        <Button title="log in" onPress={()=>{this._login()}}/>
      </View>
    )
  }

}