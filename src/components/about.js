import React, { Component } from 'react';
import './about.css'

class About extends Component {

  render() {

    return (
      
        <div className='about_grid'>

            <div className='top_left'>
            <h3>Hey, I'm Chase Davis</h3>

            <div className='paragraphs'>
            <p>A developer with a passion for creating beautiful, full stack web applications.
            A graduate from <span>Eastern Washington University</span> with a degree in finance.
            Now pursuing a career web development, with help from <span>DevMountain</span>, Utah's full stack web development bootcamp.</p>
            <p>I'm constantly working new and exciting projects so feel free to explore some of my <span>latest work</span>.</p>
            </div>

            </div>
            <div className='top_right'></div>
            <div className='bottom_left'></div>
            <div className='bottom_right'></div>

        </div>
     
    );
  }
}

export default About;