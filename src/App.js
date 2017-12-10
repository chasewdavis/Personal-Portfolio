import React, { Component } from 'react';

import './App.css';
import Menu from './svg/menu.js';
// import Linkedin from './svg/linkedin.js';
// import GitHub from './svg/github.js';
import X from './svg/close.js';
import AboutMe from './components/about.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import RightNav from './components/right-nav.js';
// import Mail from './svg/mail.js';

//to prevent setting state hundreds more times than we need to
let state_set_1 = false;
let state_set_2 = false;
let state_set_3 = false;
let state_set_4 = false;

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      open_menu: false,
      section: 1
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', () => this.checkScrollHeight())    
  }

  checkScrollHeight(){

    var currentHeight = window.scrollY;

    var about_Y = document.getElementById('one').offsetTop;
    var skills_Y = document.getElementById('two').offsetTop;
    var projects_Y = document.getElementById('three').offsetTop;
    var contact_Y = document.getElementById('four').offsetTop;

    var break_1 = ( about_Y + skills_Y ) / 2;
    var break_2 = ( skills_Y +  projects_Y ) / 2;
    var break_3 = ( projects_Y + contact_Y ) / 2;

    // designed to only set the state a single time while scrolling over each break point;

    if(currentHeight > break_1){
      if(currentHeight > break_2 ){
        if(currentHeight > break_3){
          if(!state_set_4){
            this.setState({section:4});
            state_set_4 = true;
            state_set_3 = false;
            state_set_2 = false;
            state_set_1 = false;
          }
        }else if(!state_set_3){
          this.setState({section:3});
          state_set_3 = true;
          state_set_1 = false;
          state_set_2 = false;
          state_set_4 = false;
        }
        
      }else{
        if(!state_set_2){
          console.log('two')
          this.setState({section:2});
          state_set_2 = true;
          state_set_1 = false;
          state_set_3 = false;
        }
        
      }
    }else{
      if(!state_set_1){
        console.log('one')
        this.setState({section:1});
        state_set_1 = true;
        state_set_2 = false;
        state_set_3 = false;
      }
      
    }

  }

  render() {

    return (
  
      <div>
          
          <div className='menu' onClick={()=>this.setState({open_menu:true})}>
          {/* svg image displayed only on smaller screens */}
            <Menu/>
          </div>
          <div className={this.state.open_menu?'open_menu':'close_menu'}>
              <button id='close' onClick={()=>this.setState({open_menu:false})}><X/></button>
              <button onClick={()=>{this.scroll_to_section('one');this.setState({open_menu:false})}}>Me</button>
              <button onClick={()=>{this.scroll_to_section('two');this.setState({open_menu:false})}}>Work</button>
              <button onClick={()=>{this.scroll_to_section('three');this.setState({open_menu:false})}}>Contact</button>
          </div>
        

          <RightNav section={this.state.section} /> 
          <div id='one'></div>
          <AboutMe/>
          <div id='two'></div>
          <Skills/>
          <div id='three'></div>
          <Projects/>
          <div id='four'></div>
          <Contact/>
      </div>
    );
  }
}

export default App;
