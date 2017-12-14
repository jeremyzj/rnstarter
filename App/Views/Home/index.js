import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import { connect } from 'react-redux'
import * as HomeModules from '../../Modules/Home'
import {HomeNormalImg, HomeFocusImg} from '../../Images'

const mapStateToProps = (state) => ({
  repos: state.getIn(['home', 'repos']),
  number: state.getIn(['home', 'number'])
})

const mapDispatchToProps = (dispatch) => ({
  requestRepo: () => dispatch(HomeModules.actions[HomeModules.types.REPO]()),
  increase: (number) => dispatch(HomeModules.actions[HomeModules.types.NUMBER](number + 1)),
  decrease: (number) => dispatch(HomeModules.actions[HomeModules.types.NUMBER](number - 1)),
})

export class Home extends Component {
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ focused }) => <Image source={focused ? HomeFocusImg : HomeNormalImg} style={[{ marginBottom: 1 }]} />,   
  }

  _request() {
    this.props.requestRepo()
  }

  _increase() {
    const { number } = this.props
    this.props.increase(number)
  }

  _decrease() {
    const { number } = this.props
    this.props.decrease(number)
  }

  render() {
    const { number } = this.props

    return (
      <View>
        <Text>Home</Text>
        <Button title="加" onPress={this._increase.bind(this)}/> 
        <Button title="减" onPress={this._decrease.bind(this)}/> 
        <Text>{number}</Text>
        <Button title="request" onPress={this._request.bind(this)}/>  
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)