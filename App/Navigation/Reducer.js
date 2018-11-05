import { AppNavigator } from './AppNavigation'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

// const tabAction = AppNavigator.router.getActionForPathAndParams('Main')
// const tabNavState = AppNavigator.router.getStateForAction(tabAction)
// const initialNavState = AppNavigator.router.getStateForAction(tabNavState)

const navReducer = createNavigationReducer(AppNavigator)


export default navReducer
