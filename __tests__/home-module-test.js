
import * as HomeModule from '../App/Modules/Home'
import HomeReducer from '../App/Modules/Home'
import {actionTypes} from '../App/Networks/NetworkConfig'
import Immutable from 'immutable'

describe('actions', () => {
  it('should create an action to count', () => {
    const number = 1
    const expectedAction = {
      type: HomeModule.types.NUMBER,
      payload: number,
      key: 'number'
    }
    expect(HomeModule.actions[HomeModule.types.NUMBER](number)).toEqual(expectedAction)
  })
})


describe('actions', () => {
  it('should create an action to load repo', () => {
    const expectedAction = {
      type: HomeModule.types.REPO,
      path: 'user/repos',
      requestType: actionTypes.GET,
      key: 'repos'
    }
    expect(HomeModule.actions[HomeModule.types.REPO]()).toEqual(expectedAction)
  })
})

describe('home reducer', () => {
  it('should return the initial state ', () => {
    const initialState = Immutable.fromJS({
      repos : [],
      number : 0
    })
    expect(HomeReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle Home.Number', () => {
    const initialState = Immutable.fromJS({
      repos : [],
      number : 0
    })
    const result = Immutable.fromJS({
      repos : [],
      number : 1
    })
    expect(
      HomeReducer(initialState, {
        type: HomeModule.types.NUMBER,
        payload: 1,
        key: 'number'
      })
    ).toEqual(result)
  })
})

