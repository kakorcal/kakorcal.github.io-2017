import React, {Component} from 'react'
import profile from '../assets/profile.png'
import resume from '../assets/Kenneth_Korcal_Resume.pdf'

export default class Nav extends Component{
  render(){
    var rotater = {
      transform: `rotate(${this.props.scroll}deg)`
    };

    return (
      <div ref='nav' className='k-nav fadeIn'>
        <div className='k-about-desktop'>
          <h3>Thanks For Stopping By!</h3>
          <img src={profile} height="200" width="200" alt="pic" />    
          <p>Hi, my name is Kenneth Korcal. I am a Front-End Web Developer based in San Francisco, California. You can check out my projects here. Have a nice day!</p>    
        </div>
        <div className='k-about-mobile'>
          <h3>Kenneth Korcal <small>- Front-End Developer</small></h3>
        </div>
        <div className='k-contact'>
          <div>
            <a href='https://github.com/kakorcal' target='_blank' className='btn btn-default k-shadow'>
              <i className='fa fa-github' style={rotater}></i> <span>GITHUB</span>
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/kennethkorcal' target='_blank' className='btn btn-default k-shadow'>
              <i className='fa fa-linkedin' style={rotater}></i> <span>LINKEDIN</span>
            </a>   
          </div>
          <div>
            <a href={resume} target='_blank' className='btn btn-default k-shadow'>
              <i className='fa fa-file-text-o' style={rotater}></i> <span>RESUME</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}