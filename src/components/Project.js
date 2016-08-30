import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import actions from '../redux/actions/index'
import store from '../redux/store'
import Images from './Images'

class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
      project: null,
      prev: null,
      next: null,
      images: []
    };
  }
  
  setImagePaths(project){
    let images = [];
    for(var i = 1; i <= project.imagecount; i++){
      images.push(`${project.pathname.substring(1)}${i}`);
    }
    return images;
  }

  setCurrentProject(){
    let middleIdx;
    let project = this.props.projects.find((project, currentIdx)=>{
      middleIdx = currentIdx;
      return project.pathname === this.props.location.pathname;
    });
    project.index = middleIdx;
    return project;
  }

  getIndices(middleIdx){
    let len = this.props.projects.length - 1;
    let prevIdx, nextIdx;
    switch(middleIdx){
      case 0:
        prevIdx = len;
        nextIdx = 1;
        break;
      case len:
        prevIdx = len - 1;
        nextIdx = 0;
        break;
      default:
        prevIdx = middleIdx - 1;
        nextIdx = middleIdx + 1;
    }
    return {prevIdx, nextIdx};
  }

  createImages(images){
    return images.map((prop, idx)=>{
      return (
        <div className='k-image-entry' key={idx}>
          <img src={Images[prop]} alt="pic"/>
        </div>
      );
    });
  }

  handleRouteChange(e, path){

  }

  componentWillMount(){
    let project = this.setCurrentProject();
    let prev = this.props.projects[this.getIndices(project.index).prevIdx];
    let next = this.props.projects[this.getIndices(project.index).nextIdx]; 
    let images = this.setImagePaths(project);
    this.setState(Object.assign({}, {project, next, prev, images}));
  }

  componentDidMount(){
    if(!this.props.siteVisited){
      this.props.dispatch(actions.turnOffAnimation());
    }
  }

  render(){
    return (
      <div className='project-container'>
        <h1>{this.state.project.projectname}</h1>
        <div className='image-list'>
          {
            this.createImages(this.state.images)
          }
        </div>
        <div className='k-btn-group'>
          <Link to='/'>
            <button className='btn btn-default'>
              <i className='fa fa-home'></i> Back
            </button>
          </Link>
          <div>
            <button 
              onClick={this.handleRouteChange.bind(this, this.state.prev.pathname)}
              className='btn btn-default'
            >
              <i className='fa fa-arrow-left'></i> Prev -- {this.state.prev.projectname}
            </button>
            <button 
              onClick={this.handleRouteChange.bind(this, this.state.next.pathname)}
              className='btn btn-default'
            >
              {this.state.next.projectname} -- Next <i className='fa fa-arrow-right'></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state)=>state, 
  (dispatch)=>{return {dispatch};}
)(Project);