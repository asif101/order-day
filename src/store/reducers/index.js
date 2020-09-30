import { combineReducers } from 'redux'
import order from './orderReducer'
import appState from './appStateReducer'

export default combineReducers({
    order,
    appState
})
