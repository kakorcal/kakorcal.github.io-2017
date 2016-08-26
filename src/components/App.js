import React, {Component} from 'react'
import thumbnail from '../assets/thumbnail.png'
import resume from '../assets/Kenneth_Korcal_Resume.pdf'

export default class App extends Component{
  render(){
    return (
      <div className='k-wrapper'>
        <div className='k-nav'>
          <div className='k-about'>
            <h3>Thanks For Stopping By!</h3>
            <img src={thumbnail} height="215" width="215" alt="pic" />    
            <p>Hi, my name is Kenneth Korcal. I am a Front-End Web Developer based in San Francisco, California. You can check out my projects here. Have a nice day!</p>    
          </div>
          <div className='k-contact'>
            <div>
              <a href='https://github.com/kakorcal' target='_blank' className='btn btn-default'>
                <i className='fa fa-github'></i> <span>GITHUB</span>
              </a>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/kennethkorcal' target='_blank' className='btn btn-default'>
                <i className='fa fa-linkedin'></i> <span>LINKEDIN</span>
              </a>   
            </div>
            <div>
              <a href={resume} target='_blank' className='btn btn-default'>
                <i className='fa fa-file-text-o'></i> <span>RESUME</span>
              </a>
            </div>
          </div>
        </div>
        <div className='k-body'>
          {this.props.children}
        </div>
      </div>
    );
  }
};