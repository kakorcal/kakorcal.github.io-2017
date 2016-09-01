import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import actions from '../redux/actions/index'
import store from '../redux/store'
import Thumbnails from './Thumbnails'


class Home extends Component {
  constructor(props){
    console.log('HOME GET INITIAL STATE');
    super(props);
    this.state = {
      siteVisited: false
    };
    console.log('THIS: ', this);
  }

  componentWillMount(){
    console.log('HOME COMPONENT WILL MOUNT');
    this.setState(store.getState());
  }

  componentDidMount(){
    console.log('HOME COMPONENT DID MOUNT');
    if(!this.state.siteVisited){
      console.log('HOME DISPATCH ACTION');
      this.props.dispatch(actions.turnOffAnimation());
    }
  }

  createPosts(siteVisited){
    return this.props.projects.map((project, idx)=>{
      let src = `${project.pathname.substring(1)}`;

      return (
        <div className='col col-md-4 col-sm-6 k-post' key={idx}>
          <Link to={project.pathname} className={`k-box k-${idx+1} ${siteVisited ? 'noAnimation' : 'bounceIn'}`}>
            <div className='k-entry'>
              <div className='k-thumbnail'>
                <img src={Thumbnails[src]} alt="pic" className='k-shadow'/>
              </div>
              <h5>{project.projectname}</h5>
            </div>
          </Link>
        </div>
      );
    });
  }

  render(){
    return (
      <div className='col k-posts'>
        {
          this.createPosts(this.state.siteVisited)
        }
      </div>
    );
  }
}

export default connect(
  (state)=>state, 
  (dispatch)=>{return {dispatch};}
)(Home);