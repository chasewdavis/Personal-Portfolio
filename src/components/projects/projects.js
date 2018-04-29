import React, { Component } from 'react';
import './projects.css';
import habits from '../../jpg/habits.png';
import codewars from '../../jpg/codewars.png';
import trivia from '../../jpg/trivia.png';

import ReactLogo from '../../svg_skills/react.js';
import Angular from '../../svg_skills/angular.js';
import Node from '../../svg_skills/node.js';
import Sass from '../../svg_skills/sass.js';
import Postgresql from '../../svg_skills/postgresql.js';
import Git from '../../svg_skills/git.js';
import Gulp from '../../svg_skills/gulp.js';

class Projects extends Component {

  render() {

    return (
      
        <div className='projects_grid'>
            <h3 className='header'>Projects</h3>

            <div className='left gif pro2 top_hidden'>
                <a target="_blank" rel="noopener noreferrer" href="http://trivia.chasedavis.io"><img src={trivia} alt='trivia app'></img></a>
            </div>
            <div className='right words pro1'>
                <div className='words_body'>
                    <header>Trivia App</header>

                    <div className='links'>
                    <a target="_blank" rel="noopener noreferrer" href="http://trivia.chasedavis.io">Visit Page</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/chasewdavis/AngularWithGulp">View Code</a>
                    </div> 

                    <div className='description'>Classic Arcade themed trivia app, select category, difficulty, learn fun facts and post high scores for all to see.</div>
 
                    <div className='tech_words'>Technogies Used: AngularJS, Gulp, Node, Massive, PostgreSQL.</div>

                    <div className='tech_used'>
                        <Angular width='60px'/>
                        <Gulp width='30px'/>
                        <Node width='60px'/>
                        <Postgresql width='60px'/>
                        <Git width='60px'/>
                    </div>

                </div>
            </div>
            <div className='left gif below_hidden'>
                <a target="_blank" rel="noopener noreferrer" href="http://trivia.chasedavis.io"><img src={trivia} alt='trivia app'></img></a>
            </div>


            <div className='left words pro3'>

                <div className='words_body'>   

                    <header>Code Wars Clone</header>

                    <div className='links'>
                    <a target="_blank" rel="noopener noreferrer" href="http://codewarsclone.chasedavis.io">Visit Page</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/chasewdavis/codewarsclone">View Code</a>
                    </div> 

                    <div className='description'>Built to challenge a developer's programming skills across a wide range of categories and difficulties.</div>

                    <div className='tech_words'>Technogies Used: ReactJS, Redux, Sass, Node, Massive, PostgreSQL.</div>

                    <div className='tech_used'>
                        <ReactLogo width='60px'/>
                        <Sass width='60px'/>
                        <Node width='60px'/>
                        <Postgresql width='60px'/>
                        <Git width='60px'/>
                    </div>  
                </div>
            </div>
            <div className='right gif pro4'>
                <a target="_blank" rel="noopener noreferrer" href="http://codewarsclone.chasedavis.io"><img src={codewars} alt='codewars app'></img></a>
            </div>

            <div className='left gif pro6 top_hidden'>
                <a target="_blank" rel="noopener noreferrer" href="http://happyhabits.chasedavis.io"><img src={habits} alt='habits app'></img></a>
            </div>
            <div className='right words pro5'>
                <div className='words_body'>

                    <header>Habit Tracking App</header>

                    <div className='links'>
                        <a target="_blank" rel="noopener noreferrer" href="http://happyhabits.chasedavis.io">Visit Page</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/chasewdavis/seven-days-personal-project">View Code</a>
                    </div> 

                    <div className='description'>Created in order to track personal or shared goals while challenging friends along the way.</div>
                    
                    <div className='tech_words'>Technogies Used: AngularJS, Gulp, Node, Massive, PostgreSQL.</div>

                    <div className='tech_used'>
                        <ReactLogo width='60px'/>
                        <Sass width='60px'/>
                        <Node width='60px'/>
                        <Postgresql width='60px'/>
                        <Git width='60px'/>
                    </div>
            
                </div>
            </div>
            <div className='left gif pro6 below_hidden'>
                <a target="_blank" rel="noopener noreferrer" href="http://happyhabits.chasedavis.io"><img src={habits} alt='habits app'></img></a>
            </div>

        </div>
     
    );
  }
}

export default Projects;