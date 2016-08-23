import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/base.scss'
import img1 from './assets/angular_blog_app1.jpg'
import img2 from './assets/angular_blog_app2.jpg'
import img3 from './assets/angular_blog_app3.jpg'
import img4 from './assets/bomberman4.jpg'
import img5 from './assets/bomberman5.jpg'
import img6 from './assets/bomberman6.jpg'
import img7 from './assets/knex_photo_app7.jpg'
import img8 from './assets/knex_photo_app8.jpg'
import img9 from './assets/knex_photo_app9.jpg'
import img10 from './assets/linguo10.jpg'
import img11 from './assets/linguo11.jpg'
import img12 from './assets/linguo12.jpg'
import img13 from './assets/michael_baca13.jpg'
import img14 from './assets/michael_baca14.jpg'
import img15 from './assets/michael_baca15.jpg'
import img16 from './assets/sara_faith_alterman16.jpg'
import img17 from './assets/sara_faith_alterman17.jpg'
import img18 from './assets/sara_faith_alterman18.jpg'
import thumb from './assets/thumbnail.png'

class App extends Component{
  render(){
    return (
      <div className='container'>
        <h1>Hello World</h1>
        <img src={img1} alt="one"/>
        <img src={img2} alt="one"/>
        <img src={img3} alt="one"/>
        <img src={img4} alt="one"/>
        <img src={img5} alt="one"/>
        <img src={img6} alt="one"/>        
        <img src={img7} alt="one"/>
        <img src={img8} alt="one"/>
        <img src={img9} alt="one"/>
        <img src={img10} alt="one"/>
        <img src={img11} alt="one"/>
        <img src={img12} alt="one"/>
        <img src={img13} alt="one"/>
        <img src={img14} alt="one"/>
        <img src={img15} alt="one"/>
        <img src={img16} alt="one"/>
        <img src={img17} alt="one"/>
        <img src={img18} alt="one"/>
        <img src={thumb} alt="one"/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));