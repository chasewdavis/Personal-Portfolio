import React, { Component } from 'react';
import './about.css'

var viewPortHeight;
var scrollCount = 0;

class About extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
    this.scrollLoop = this.scrollLoop.bind(this);
  }

  componentDidMount(){

    window.addEventListener('DOMContentLoaded', this.scrollLoop, false)
  }

  scrollLoop(){
    this.onScroll();
    // The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. 
    requestAnimationFrame(this.scrollLoop)
  }

  onScroll(){
    scrollCount++;
    // console.log(scrollCount);
    let y = window.scrollY;
    // console.log(y);
    let marginBottom = this.precisionRound(y / 5, 1);

    let viewPortHeight = window.innerHeight;
    let aboutOpacity = this.precisionRound( 1 - y / viewPortHeight*2, 2 );
    let greetOpacity = this.precisionRound( ( y*2 / viewPortHeight ) - 1 , 2 );

    document.getElementById('my_name').setAttribute('style', `margin-bottom: ${marginBottom}px`);
    document.getElementById('about').setAttribute('style', `opacity: ${aboutOpacity}`);
    document.getElementById('greet').setAttribute('style', `opacity: ${greetOpacity}`);
  }

  precisionRound(number, precision) {
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  render() { 

    return (

      <div className='about_parent'>
        <div id='about'>
          <h1 id='my_name'>Chase Davis</h1>
          <h2>Creating modern web solutions</h2>
        </div>
        <div id='greet'>
          <div className='greet_contain'>
            <p>Hello,</p>
            <p>I'm a web developer from Portland.</p>
            <p>I specialize in building full stack web applications</p>
          </div>
        </div>
      </div>
     
    );
  }
}

export default About;