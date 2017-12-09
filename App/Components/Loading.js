import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native'

import PropTypes from 'prop-types'
import Spinner from 'react-native-spinkit'
const { height } = Dimensions.get('window')

export default class Loading extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    loadingText: PropTypes.string
  }

  render() {
    const {isVisible, loadingText} = this.props
    if (isVisible) {
      return(
        <View style={styles.container}>
          <Spinner style={styles.spinner} isVisible={true} size={30} type={'Circle'} color={'#eee'}/>
          <Text style={styles.loadingText}>{loadingText}</Text>
        </View>
      )
    } else {
      return null
    }
  }
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.60)',
    position: 'absolute',
    top: 0 ,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
  },
  spinner: {
    marginTop: height / 2 - 90,
    marginBottom: 30 
  },
  loadingText: {
    color: '#eee',
    fontSize: 13
  }
})