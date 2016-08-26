import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import storeConfig from './redux/store'
import RouterComponents from './routes'
import './styles/base.scss'

const store = storeConfig({});

ReactDOM.render(
  <Provider store={store}>
    {RouterComponents}
  </Provider>
  , document.getElementById('root'));