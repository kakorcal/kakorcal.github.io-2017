import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import logo from './assets/k-logo.svg'
import './styles/base.scss'

class App extends Component{
  render(){
    return (
      <div className='container'>
        <h1>Logo</h1>
        <div className='logo-container'>
          <div className='logo'>
            <object>
              <embed src={logo}/>
            </object>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));