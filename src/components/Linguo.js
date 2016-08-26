import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Linguo extends Component {
  render(){
    return (
      <div>
        <h3>Linguo</h3>
        <div><Link to='/'>Home</Link></div>
      </div>
    );
  }
}