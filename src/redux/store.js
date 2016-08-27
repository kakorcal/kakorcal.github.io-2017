import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'
import initialState from './api'

export default createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);