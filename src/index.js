import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/base.scss'

class App extends Component{
  render(){
    return (
      <div>
        <h1>Hello From React</h1>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));