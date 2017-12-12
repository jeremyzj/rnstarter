
import request from './index'
import {actionTypes} from './NetworkConfig'

const NetworkMiddleware = store => next => action => {
  console.log('dispatching', action)
  const { requestType } = action
  let actionValues = Object.values(actionTypes)
  let actionKeys = Object.keys(actionTypes)
  let index = actionValues.indexOf(requestType)
  if (index === -1) {
    return next(action)
  } else {
    const { path, type, key } = action
    let options =  {'method': actionKeys[index]} 
    //这里可能需要根据实际，改变oauth方式
    options.headers = {'Authorization': 'Bearer dad80fd79fa834e03da62b87c4b1e420d1d4e3b2'}
    request(path, options).then(data => {
      store.dispatch({type: type, key:key, payload: data})
    }).catch(error => {
      store.dispatch({type: actionTypes.ERROR, error: error})
    })
  }
}

export default NetworkMiddleware
