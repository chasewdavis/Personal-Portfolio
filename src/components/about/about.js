import React, { Component } from 'react';
import './about.css';

class About extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
    this.scrollLoop = this.scrollLoop.bind(this);
  }

  componentDidMount(){

    window.addEventListener('DOMContentLoaded', this.scrollLoop, false);
    window.addEventListener('resize', this.screenWidth, false);
    this.screenWidth();
  }

  scrollLoop(){
    this.onScroll();
    // The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. 
    requestAnimationFrame(this.scrollLoop)
  }

  screenWidth(){
    // screen width can be adjusted and no refreshing of the page is required

    let wide = window.innerWidth;
    let tall = window.innerHeight;

    // in mobile browsers vh is garbage.
    if(wide < 800){
      // 200vh without the side affects on mobile
      // may want to throw out parallax all together for mobile views
      // window.removeEventListener('DOMContentLoaded', this.scrollLoop, false);
      document.getElementsByClassName('about_parent')[0].setAttribute('style', `height:${tall*2}px`);
    }else{
      // window.addEventListener('DOMContentLoaded', this.scrollLoop, false);
      document.getElementsByClassName('about_parent')[0].removeAttribute('style');
    }

  }

  onScroll(){

    let y = window.scrollY;
    let vph = window.innerHeight;
    let marginBottom = this.precisionRound( Math.min( y / 5,  60), 1);
    let aboutOpacity = this.precisionRound( Math.max( 1 - y / vph*2, 0), 2 );
    let greetOpacity = this.precisionRound( Math.min( Math.max( ( y*2 / vph ) - 1, 0 ), 1 ),  2 );
    let overlayOpacity = this.precisionRound( Math.min( Math.max(.5, greetOpacity) * .7, .7), 2 ) // stay between .35 and .7, move at same rate as greetOpacity
    let scrollIsFinished = y >= vph;

    document.getElementById('my_name').setAttribute('style', `margin-bottom: ${marginBottom}px`);
    document.getElementById('about').setAttribute('style', `opacity: ${aboutOpacity}`);
    document.getElementById('greet_contain').setAttribute('style', `opacity: ${greetOpacity}`);
    document.getElementById('greet_overlay').setAttribute('style', `opacity: ${overlayOpacity}`)

    let arrow = document.getElementById('down_arrow');

    if( scrollIsFinished ){
      arrow.classList.add('fadeOut');
    } else {
      arrow.classList.remove('fadeOut');
    }
    
  }

  precisionRound(number, precision) {
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  render() { 

    return (

      <div className='about_parent'>

        <div id='greet'>

          <div id='greet_overlay'></div>

          <div id='greet_contain'>
            <p>Hello,</p>
            <p>I'm a web developer in Portland.</p>
            <p>I specialize in building full stack web applications</p>
          </div>

          <div id='down_arrow' className='upDownUp'></div>

        </div>

        <div id='about'>

          <h1 id='my_name'><span>C</span>hase <span>D</span>avis</h1>
          <h2 id='my_thing'>Creating modern web solutions.</h2>

        </div>
      </div>
     
    );
  }
}

export default About;