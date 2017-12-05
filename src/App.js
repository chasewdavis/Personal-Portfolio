import React, { Component } from 'react';
import './App.css';
import Menu from './svg/menu.js';
import Linkedin from './svg/linkedin.js';
import GitHub from './svg/github.js';
import X from './svg/close.js';
import AboutMe from './components/about.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import Mail from './svg/mail.js';

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

  checkScrollHeight(){
    console.log('hi');
    let currentHeight = document.getElementsByClassName('content_window')[0].scrollTop;

    let about_Y = document.getElementById('one').offsetTop;
    let skills_Y = document.getElementById('two').offsetTop;
    let projects_Y = document.getElementById('three').offsetTop;
    let contact_Y = document.getElementById('four').offsetTop;

    let break_1 = ( about_Y + skills_Y ) / 2;
    let break_2 = ( skills_Y +  projects_Y ) / 2;
    let break_3 = ( projects_Y + contact_Y ) / 2;

    // console.log(contact_Y,'and',break_3)
    // console.log('current height', currentHeight)

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

  //function designed to scroll to any section while easing into that section
  scroll_to_section(id){
    
    let initial = 1; //milliseconds used to scroll smoothly
    // let timeFraction = 1;
    let marginY = document.getElementsByClassName('content_window')[0].scrollTop;
    let destination = document.getElementById(id).offsetTop;
    // let difference = Math.abs(marginY - destination);
    let halfway = (marginY + destination) * .5; // maybe make it number of pixels to that section
    let madeItHalfWay = false;
    console.log(halfway)

    function handleScroll(index,direction){
      if(index > halfway && madeItHalfWay === false && direction==='down') {
        madeItHalfWay = true;
      }
      if(index < halfway && madeItHalfWay === false && direction==='up') {
        madeItHalfWay = true;
      }

      
      let timeFraction = Math.abs(index - halfway)/(halfway) * 10;
    

      // console.log(madeItHalfWay)

      if(madeItHalfWay){
        initial = initial + 5 + timeFraction;
      }else{
        initial = initial + 4;
      }
      
      setTimeout(()=>{
        document.getElementsByClassName('content_window')[0].scrollTop = index;
      }, initial * .1 ) // change fraction to change scroll speed
    }

    //determines scroll direction
    if(marginY < destination){
      for(let i = marginY; i <= destination; i++){
        handleScroll(i,'down')
      }
    }else{
      for(let i = marginY; i >= destination; i--){
        handleScroll(i,'up')
      }
    }

  }

  render() {

    return (
  
        <div className='content_window' onScroll={()=>this.checkScrollHeight()}>
          <div className='fixed-right-navbar'>
              <div className='img-container'></div>
              <div className='img-filler'></div>
              <button onClick={()=>{this.scroll_to_section('one')}} className={this.state.section===1?'highlight-btn about-btn':'unhighlight-btn about-btn'}>About</button>
              <button onClick={()=>{this.scroll_to_section('two')}} className={this.state.section===2?'highlight-btn skills-btn':'unhighlight-btn skills-btn'}>Skills</button>
              <button onClick={()=>{this.scroll_to_section('three')}} className={this.state.section===3?'highlight-btn projects-btn':'unhighlight-btn projects-btn'}>Projects</button>
              <button onClick={()=>{this.scroll_to_section('four')}} className={this.state.section===4?'highlight-btn contact-btn':'unhighlight-btn contact-btn'}>Contact</button>
              <div className='links'>
              <a target="_blank" href="https://www.linkedin.com/in/chase-davis-085aa6134/">
                <div className='circle_link'>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </div>
              </a>
              <a target="_blank" href="https://github.com/chasewdavis">
                <div className='no_circle_link'>
                  <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                </div>
              </a>
              <a target="_blank" href="mailto: chasewdavis7@gmail.com">
                <div className='circle_link'>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
              </a>
              </div>
          </div>
          {/* <div className='side_bar'></div>
          <div className='side_bar_spacer'></div> */}
          {/* <div className='social_links'>
            <Linkedin/>
            <GitHub/>
          </div> */}
          <div className='menu' onClick={()=>this.setState({open_menu:true})}>
            <Menu />
          </div>
          <div className={this.state.open_menu?'open_menu':'close_menu'}>
              <button id='close' onClick={()=>this.setState({open_menu:false})}><X/></button>
              <button onClick={()=>{this.scroll_to_section('one');this.setState({open_menu:false})}}>Me</button>
              <button onClick={()=>{this.scroll_to_section('two');this.setState({open_menu:false})}}>Work</button>
              <button onClick={()=>{this.scroll_to_section('three');this.setState({open_menu:false})}}>Contact</button>
          </div>
            {/* <div id='loc_box_1' className={this.state.section===1?'location_box_hilighted':'location_box'} ></div>
            <div id='loc_box_2' className={this.state.section===2?'location_box_hilighted':'location_box'}></div>
            <div id='loc_box_3' className={this.state.section===3?'location_box_hilighted':'location_box'}></div> */}

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
