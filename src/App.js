import React, { Component } from 'react';
import './App.css';
import Menu from './svg/menu.js';
import Linkedin from './svg/linkedin.js';
import GitHub from './svg/github.js';
import X from './svg/close.js';
import AboutMe from './components/about.js';
import Work from './components/work.js';
import Contact from './components/contact.js';

//to prevent setting state hundreds more times than we need to
let state_set_1 = false;
let state_set_2 = false;
let state_set_3 = false;

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      open_menu: false,
      section: 1
    }
  }

  checkScrollHeight(){
    let currentHeight = document.getElementsByClassName('content_window')[0].scrollTop;

    let about_Y = document.getElementById('one').offsetTop;
    let work_Y = document.getElementById('two').offsetTop;
    let contact_Y = document.getElementById('three').offsetTop;

    let break_1 = ( about_Y + work_Y ) / 2;
    let break_2 = ( work_Y +  contact_Y ) / 2;
    
    if(currentHeight > break_1){
      if(currentHeight > break_2 ){
        if(!state_set_3){
          this.setState({section:3});
          state_set_3 = true;
          state_set_1 = false;
          state_set_2 = false;
        }
        
      }else{
        if(!state_set_2){
          // console.log('two')
          this.setState({section:2});
          state_set_2 = true;
          state_set_1 = false;
          state_set_3 = false;
        }
        
      }
    }else{
      if(!state_set_1){
        // console.log('one')
        this.setState({section:1});
        state_set_1 = true;
        state_set_2 = false;
        state_set_3 = false;
      }
      
    }

  }

  scroll_to_section(id){
    
    let initial = 0; //milliseconds used to scroll smoothly
    let marginY = document.getElementsByClassName('content_window')[0].scrollTop;
    let destination = document.getElementById(id).offsetTop;

    function handleScroll(index){
      ++initial
      setTimeout(()=>{
        document.getElementsByClassName('content_window')[0].scrollTop = index;
      }, initial * 1 / 2) // change fraction to change scroll speed
    }

    //determines scroll direction
    if(marginY < destination){
      for(let i = marginY; i <= destination; i++){
        handleScroll(i)
      }
    }else{
      for(let i = marginY; i >= destination; i--){
        handleScroll(i)
      }
    }

  }

  render() {

    return (
  
        <div className='content_window' onScroll={()=>this.checkScrollHeight()}>
          <div className='side_bar'></div>
          <div className='side_bar_spacer'></div>
          <div className='social_links'>
            <Linkedin/>
            <GitHub/>
          </div>
          <div className='menu' onClick={()=>this.setState({open_menu:true})}>
            <Menu />
          </div>
          <div className={this.state.open_menu?'open_menu':'close_menu'}>
              <button id='close' onClick={()=>this.setState({open_menu:false})}><X/></button>
              <button onClick={()=>{this.scroll_to_section('one');this.setState({open_menu:false})}}>Me</button>
              <button onClick={()=>{this.scroll_to_section('two');this.setState({open_menu:false})}}>Work</button>
              <button onClick={()=>{this.scroll_to_section('three');this.setState({open_menu:false})}}>Contact</button>
          </div>
            <div id='loc_box_1' className={this.state.section===1?'location_box_hilighted':'location_box'} ></div>
            <div id='loc_box_2' className={this.state.section===2?'location_box_hilighted':'location_box'}></div>
            <div id='loc_box_3' className={this.state.section===3?'location_box_hilighted':'location_box'}></div>

            <div id='one'></div>
            <AboutMe/>
            <div id='two'></div>
            <Work/>
            <div id='three'></div>
            <Contact/>
        </div>
     
    );
  }
}

export default App;
