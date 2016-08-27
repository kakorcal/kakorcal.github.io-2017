import React, {Component} from 'react'
import Nav from './Nav'

export default class App extends Component{
  render(){
    return (
      <div className='k-wrapper'>
        <Nav></Nav>
        <div className='k-body'>
          {this.props.children}
        </div>
      </div>
    );
  }
};