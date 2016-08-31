import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import store from '../redux/store'
import Nav from './Nav'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      scroll: 0
    }
  }

  handleScroll(e) {
    const scroll = ReactDOM.findDOMNode(this.refs.kBody).scrollTop;
    this.setState(Object.assign({}, this.state, {scroll}));
  }

  componentDidMount() {
    const kBody = ReactDOM.findDOMNode(this.refs.kBody);
    kBody.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    const kBody = ReactDOM.findDOMNode(this.refs.kBody);
    kBody.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  render(){
    return (
      <div className='k-wrapper'>
        <Nav scroll={this.state.scroll} />
        <div ref='kBody' className='k-body'>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default connect(
  (state)=>state, 
  (dispatch)=>{return {dispatch}}
)(App);