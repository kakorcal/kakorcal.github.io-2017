import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import actions from '../redux/actions/index'
import store from '../redux/store'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      siteVisited: false
    };
    console.log('CONSTRUCTOR - INVOKED BEFORE COMPONENT WILL MOUNT');
  }
  componentWillMount(){
    console.log('COMPONENT WILL MOUNT');
    this.setState(store.getState());
  }
  componentDidMount(){
    console.log('COMPONENT DID MOUNT');
    if(!this.state.siteVisited){
      this.props.dispatch(actions.turnOffAnimation());
    }
  }
  render(){
    return (
      <div className='col k-posts'>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className={`k-box k-1 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>1</Link>
        </div>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className={`k-box k-2 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>2</Link>
        </div>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className={`k-box k-3 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>3</Link>
        </div>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className={`k-box k-4 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>4</Link>
        </div>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className={`k-box k-5 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>5</Link>
        </div>
        <div className='col col-lg-4 col-md-6 k-post'>
          <Link to='/linguo' className={`k-box k-6 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>6</Link>
        </div>          
      </div>
    );
  }
}

export default connect(
  (state)=>state, 
  (dispatch)=>{return {dispatch};}
)(Home);