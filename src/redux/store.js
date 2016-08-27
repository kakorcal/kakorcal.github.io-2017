import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './reducers/index.js'
import logger from 'redux-logger'

const initialState = {
  siteVisited: false
};

export default createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);