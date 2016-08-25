import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/base.scss'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      logo: 'blueToGreen',
      kBar: 'greenToBlue',
      swap: true
    }
  }
  swapColors(){ 
    if(this.state.swap){
      this.setState({
        logo: 'greenToBlue',
        kBar: 'blueToGreen',
        swap: false
      });
    }else{
      this.setState({
        logo: 'blueToGreen',
        kBar: 'greenToBlue',
        swap: true
      });
    }
  }
  componentDidMount(){
    setInterval(this.swapColors.bind(this), 10000);
  }
  render(){
    return (
      <div className='container'>
        <h1>Logo</h1>
        <div className='logo-container'>
          <div className={`logo ${this.state.logo}`}>
            <span className='k-line k-1'></span>
            <span className='k-line k-2'></span>
            <span className='k-line k-3'></span>
            <span className='k-line k-4'></span>
            <span className={`k-bar k-a ${this.state.kBar}`}></span>
            <span className={`k-bar k-b ${this.state.kBar}`}></span>
            <span className={`k-bar k-c ${this.state.kBar}`}></span>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));