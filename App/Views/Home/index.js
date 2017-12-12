import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import HomeFocusImg from '../../Images/home_focus.png'
import HomeNormalImg from '../../Images/home_normal.png'
import { connect } from 'react-redux'
import * as HomeModules from '../../Modules/Home'

const mapStateToProps = (state) => ({
  repos: state.getIn(['home', 'repos']),
})

const mapDispatchToProps = (dispatch) => ({
  requestRepo: () => dispatch(HomeModules.actions[HomeModules.types.REPO]()),
})

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {

  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ focused }) => <Image source={focused ? HomeFocusImg : HomeNormalImg} style={[{ marginBottom: 1 }]} />,   
  }

  _request() {
    this.props.requestRepo()
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button title="request" onPress={this._request.bind(this)}/>  
      </View>
    )
  }
}