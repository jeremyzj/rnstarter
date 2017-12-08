import { AppNavigator } from './AppNavigation'

const tabAction = AppNavigator.router.getActionForPathAndParams('Main')
const tabNavState = AppNavigator.router.getStateForAction(tabAction)
const initialNavState = AppNavigator.router.getStateForAction(tabNavState)

export default (state = initialNavState, action) => {
  let nextState = AppNavigator.router.getStateForAction(action, state)
  return nextState || state
}
