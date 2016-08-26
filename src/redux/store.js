import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './reducers/index.js'
import logger from 'redux-logger'

export default function storeConfig(initialState={}){
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(logger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
};