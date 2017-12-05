import React, { Component } from 'react';
import './projects.css'
import laptop from '../jpg/laptop.png';
import SimpleSlider from './carousel.js';

class Projects extends Component {


  render() {

    return (
        
        <div className='projects_grid'>
          <div className='projects_background'><div className='overlay'></div></div>
          <h1 className='title'>Projects</h1>
          {/* <div className='laptop_container'>
            <img src={laptop} alt='laptop frame'/>
          </div> */}
          {/* <i onClick={() => console.log('left')} className="left-arrow fa fa-chevron-circle-left fa-3x " aria-hidden="true"></i>
          <i onClick={() => console.log('right')} className="right-arrow fa fa-chevron-circle-right fa-3x" aria-hidden="true"></i> */}
          <footer>Title of Project</footer>
          <SimpleSlider/>

        </div>
    );
  }
}

export default Projects;