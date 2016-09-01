import 'babel-polyfill'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import RouterComponents from './routes'
import './styles/base.scss'

ReactDOM.render(
  <Provider store={store}>
    {RouterComponents}
  </Provider>
  , document.getElementById('root'));