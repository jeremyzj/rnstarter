import React, {Component} from 'react'
import {View, Text, Button, Image, StyleSheet} from 'react-native'
import ProfileFocusImg from '../../Images/profile_focus.png'
import ProfileNormalImg from '../../Images/profile_normal.png'
import { connect } from 'react-redux'

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
  
})

@connect(mapStateToProps, mapDispatchToProps)
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
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button title="log in" onPress={()=>{this._login()}}/>
      </View>
    )
  }

}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})