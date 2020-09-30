import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { isChrome } from '../utils/browserUtils'

const middleware = [thunk]

 
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV === 'development' && isChrome
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
/* eslint-enable */

export default store