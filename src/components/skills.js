import React, { Component } from 'react';
import './skills.css';
import ReactLogo from '../svg_skills/react.js';
import Angular from '../svg_skills/angular.js';
import Node from '../svg_skills/node.js';
import Sass from '../svg_skills/sass.js';
import Postgresql from '../svg_skills/postgresql.js';
import Git from '../svg_skills/git.js';

class Skills extends Component {


  render() {

    return (
      
        <div className='skills_grid'>
        {/* <img src={ReactLogo} alt='react'/> */}
        <div className='logo_container lc1'><ReactLogo/><span>React</span></div>
        <div className='logo_container lc2'><Angular/><span>Angular</span></div>
        <div className='logo_container lc3'><Node/><span>Node</span></div>
        <div className='logo_container lc4'><Sass/><span>Sass</span></div>
        <div className='logo_container lc5'><Postgresql/><span>PostgreSQL</span></div>
        <div className='logo_container lc6'><Git/><span>Git</span></div>

        </div>
     
    );
  }
}

export default Skills;