import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import actions from '../redux/actions/index'
import store from '../redux/store'

class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentDisplay: '',
      project: {}
    };
    console.log('this.props: ', this.props);
    console.log('Path: ', this.props.location.pathname);
  }

  render(){
    return (
      <div className='container'>
        <h1>Project Page</h1>
        <Link to='/'>BACK</Link>
      </div>
    );
  }
}

export default connect(
  (state)=>state, 
  (dispatch)=>{return {dispatch};}
)(Project);