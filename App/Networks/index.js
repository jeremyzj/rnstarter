import RNFetchBlob from 'react-native-fetch-blob'
import queryString from 'query-string'
import { api } from './NetworkConfig'


const defaults = {
  method: 'post',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  }
}

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else if (response.status === 503) {
    return Promise.reject(new Error(JSON.stringify({
      code: 503,
      msg: '系统维护中，请稍后再试'
    })))
  } else {
    var error = new Error(response.statusText)
    error.detail = response

    return Promise.reject(error)
  }
}

const parseJSON = response => {
  console.log('response', response, response)
  return response.json()
}

const checkAuth = response => {
  // if (__DEV__) {
  //   console.log('checkAuth', response)
  // }
  // if (!response.success) {
  //   return Promise.reject(new Error(response.msg))
  // }

  return response
}

const errorHandler = error => {
  if (__DEV__) {
    console.log('response error', error)
  }
  return Promise.reject(error)
}

const request = (path, options) => {
  let opt = { ...defaults, ...options }
  let url = api.host + path

  if (opt.body && typeof opt.body === 'object') {
    opt.body = queryString.stringify(opt.body)
  }

  if (opt.method === 'GET' && typeof opt.body !== 'undefined') {
    url += '?' + opt.body
    delete opt.body
  }

  if (__DEV__) {
    console.log(url + '\n', opt)
  }

  return fetch(url, opt).then(checkStatus).then(parseJSON).then(checkAuth).catch(errorHandler)
}

export default request

export const get = (path, options) => {
  return request(path, { ...options, ...{ method: 'GET' } })
}

export const post = (path, options) => {
  return request(path, { ...options, ...{ method: 'POST' } })
}

export const upload = (path, options) => {
  const body = options.body
  const arr = []
  let url = api.host + path

  Object.keys(body).map(i => {
    const v = body[i]

    if (v) {
      if (typeof v === 'object') {
        arr.push({
          ...v,
          name: i,
        })
      } else {
        arr.push({
          name: i,
          data: body[i]
        })
      }
    }
  })
  console.log('arr', arr)
  return RNFetchBlob.fetch('post', url, {
    'Content-Type': 'multipart/form-data',
    'credentials': 'include'
  }, arr)
}

export const download = (path) => {

  let url = api.host + path

  return RNFetchBlob.config({
    fileCache : false,
    path: RNFetchBlob.fs.dirs.CacheDir + path
  }).fetch('GET', url, {
    //some headers ..
  })
}
