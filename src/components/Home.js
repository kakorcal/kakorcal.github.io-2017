import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import actions from '../redux/actions/index'
import store from '../redux/store'
import wikirace from '../assets/thumbnail280x280/wikirace.jpg'
import angular_blog from '../assets/thumbnail280x280/angular_blog.jpg'
import linguo from '../assets/thumbnail280x280/linguo.jpg'
import bomberman from '../assets/thumbnail280x280/bomberman.jpg'
import michael_baca from '../assets/thumbnail280x280/michael_baca.jpg'
import sara_alterman from '../assets/thumbnail280x280/sara_alterman.jpg'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      siteVisited: false
    };
    console.log('GET INITIAL STATE');
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
        <div className='col col-md-4 col-sm-6 k-post'>
          <Link to='/wikirace' className={`k-box k-1 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>
            <div className='k-entry'>
              <div className='k-thumbnail'>
                <img src={wikirace} alt="pic"/>
              </div>
              <h5>WIKIRACE</h5>
            </div>
          </Link>
        </div>
        <div className='col col-md-4 col-sm-6 k-post'>
          <Link to='/angular_blog' className={`k-box k-2 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>
            <div className='k-entry'>
              <div className='k-thumbnail'>
                <img src={angular_blog} alt="pic"/>
              </div>
              <h5>ANGULAR BLOG</h5>
            </div>
          </Link>
        </div>
        <div className='col col-md-4 col-sm-6 k-post'>
          <Link to='/linguo' className={`k-box k-3 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>
            <div className='k-entry'>
              <div className='k-thumbnail'>
                <img src={linguo} alt="pic"/>
              </div>
              <h5>LINGUO</h5>
            </div>
          </Link>
        </div>
        <div className='col col-md-4 col-sm-6 k-post'>
          <Link to='/bomberman' className={`k-box k-4 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>
            <div className='k-entry'>
              <div className='k-thumbnail'>
                <img src={bomberman} alt="pic"/>
              </div>
              <h5>BOMBERMAN</h5>
            </div>
          </Link>
        </div>
        <div className='col col-md-4 col-sm-6 k-post'>
          <Link to='/michael_baca' className={`k-box k-5 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>
            <div className='k-entry'>
              <div className='k-thumbnail'>
                <img src={michael_baca} alt="pic"/>
              </div>
              <h5>MICHAEL BACA PHOTOGRAPHY</h5>
            </div>
          </Link>
        </div>
        <div className='col col-md-4 col-sm-6 k-post'>
          <Link to='/sara_alterman' className={`k-box k-6 ${this.state.siteVisited ? 'noAnimation' : 'bounce-in'}`}>
            <div className='k-entry'>
              <div className='k-thumbnail'>
                <img src={sara_alterman} alt="pic"/>
              </div>
              <h5>SARA FAITH ALTERMAN</h5>
            </div>
          </Link>
        </div>          
      </div>
    );
  }
}

export default connect(
  (state)=>state, 
  (dispatch)=>{return {dispatch};}
)(Home);