import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Home extends Component {
  render(){
    return (
      <div className='col k-posts'>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className='k-box jump-in k-1'>1</Link>
        </div>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className='k-box jump-in k-2'>2</Link>
        </div>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className='k-box jump-in k-3'>3</Link>
        </div>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className='k-box jump-in k-4'>4</Link>
        </div>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className='k-box jump-in k-5'>5</Link>
        </div>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className='k-box jump-in k-6'>6</Link>
        </div>          
      </div>
    );
  }
}