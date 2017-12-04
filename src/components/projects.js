import React, { Component } from 'react';
import './projects.css'
import laptop from '../jpg/laptop.png';

class Projects extends Component {


  render() {

    return (
        
        <div className='projects_grid'>
          <div className='projects_background'><div className='overlay'></div></div>
          <h1 className='title'>Projects</h1>
          <div className='laptop_container'>
            <img src={laptop} alt='laptop frame'/>
          </div>
        </div>
    );
  }
}

export default Projects;