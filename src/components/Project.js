import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link, browserHistory} from 'react-router'
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

  setCurrentProject(current){
    let middleIdx;
    let project = this.props.projects.find((project, currentIdx)=>{
      middleIdx = currentIdx;
      return project.pathname === current;
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
          <img className='k-shadow' src={Images[prop]} alt="pic"/>
        </div>
      );
    });
  }

  updateState(current){
    let project = this.setCurrentProject(current);
    let prev = this.props.projects[this.getIndices(project.index).prevIdx];
    let next = this.props.projects[this.getIndices(project.index).nextIdx]; 
    let images = this.setImagePaths(project);

    return {project, next, prev, images};
  }

  handleRouteChange(e){
    let newState;
    switch(e.target.id){
      case 'Prev':
        browserHistory.push(this.state.prev.pathname);
        newState = this.updateState(this.state.prev.pathname);
        break;
      case 'Next':
        browserHistory.push(this.state.next.pathname);
        newState = this.updateState(this.state.next.pathname);
        break;
      default:
        break;
    }

    this.setState(Object.assign({}, newState));
  }

  componentWillMount(){
    this.setState(Object.assign({}, this.updateState(this.props.location.pathname)));
  }

  componentDidMount(){
    if(!this.props.siteVisited){
      this.props.dispatch(actions.turnOffAnimation());
    }
  }

  componentDidUpdate(){
    console.log('COMPONENT DID UPDATE');
    ReactDOM.findDOMNode(this.refs.project.parentElement).scrollTop = 0;
  }

  render(){
    return (
      <div ref='project' className='project-container fadeInLeft'>
        <div className='panel panel-default k-panel k-shadow'>
          <div className='panel-body'>
            <div className="k-title-group">
              <div>
                <h2>{this.state.project.projectname} <small> - {this.state.project.date}</small></h2>
              </div>
              <div>
                <a href={this.state.project.github} target='_blank' className='btn btn-default k-shadow'>
                  <i className='fa fa-github'></i> <span>GITHUB</span>
                </a>
                <a href={this.state.project.website} target='_blank' className='btn btn-default k-shadow'>
                  <i className='fa fa-globe'></i> <span>WEBSITE</span>
                </a>
              </div>
            </div>

          </div>
        </div>
        <div className='image-list'>
          {
            this.createImages(this.state.images)
          }
        </div>
        <div className='k-btn-group'>
          <Link to='/'>
            <button className='btn btn-default k-shadow'>
              <i className='fa fa-home'></i> Back
            </button>
          </Link>
          <div>
            <button 
              onClick={this.handleRouteChange.bind(this)}
              className='btn btn-default k-shadow'
              id='Prev'
            >
              <i className='fa fa-arrow-left'></i> Prev
            </button>
            <button 
              onClick={this.handleRouteChange.bind(this)}
              className='btn btn-default k-shadow'
              id='Next'
            >
              Next <i className='fa fa-arrow-right'></i>
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