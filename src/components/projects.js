import React, { Component } from 'react';
import './projects.css'
import jump from 'jump.js';
// import laptop from '../jpg/laptop.png';
import SimpleSlider from './carousel.js';

class Projects extends Component {

  constructor(props){
    super(props)

    //  MUST ADD TITLE TO PROJECT ARRAY WHEN ADDING NEW PROJECT
    this.state = {
      project: ['Personal Habit Tracker', 'Code Wars Clone'],
      current: 0
    }
  }

  componentDidMount(){
    if(document.getElementsByClassName('slick-next')[0]){
    document.getElementsByClassName('slick-next')[0].addEventListener("click", () => { 
      let currentProject = this.state.current;
      currentProject === this.state.project.length - 1 ? currentProject = 0 : currentProject++;
      jump('#three', {duration:500});
      this.setState({current:currentProject});     
    });

    document.getElementsByClassName('slick-prev')[0].addEventListener("click", () => {
      let currentProject = this.state.current;
      currentProject ? currentProject-- : currentProject = this.state.project.length - 1;
      jump('#three', {duration:500});
      this.setState({current:currentProject}); 
    });
    }
  }

  render() {

    return (
        
        <div className='projects_grid'>
          <div className='projects_background'><div className='overlay'></div></div>
          <h1 className='title'>Projects</h1>
          <footer>{this.state.project[this.state.current]}</footer>
          <SimpleSlider/>

        </div>
    );
  }
}

export default Projects;