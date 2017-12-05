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
        <div className='skills_container'>
          <h3 className='skills_title'>Favorite Tech</h3>
          <div className='skills_grid'>
            <div className='logo_container lc1'><ReactLogo/>
              <div>
                <h3>React</h3>
                <p>JavaScript based front-end library</p>
                <p>I love React because it encourages DRY (Don't repeat yourself) principles, aimed at reducing repetition through modular components.</p>
              </div>
            </div>
            <div className='logo_container lc2'><Angular/>
              <div>
                <h3>Angular</h3>
                <p>JavaScript based front-end framework</p>
                <p>Angular has allowed me to organize individual pieces of my projects in an efficient manner, utilizing the MVC architecure.</p>
              </div>
            </div>
            <div className='logo_container lc3'><Node/>
              <div>
                <h3>Node</h3>
                <p>Server framework utilizing JavaScript</p>
                <p>I love Node because it allows for seamless integration between the front and back end for full stack web applications.</p>
              </div>
            </div>
            <div className='logo_container lc4'><Sass/>
              <div>
                <h3>Sass</h3>
                <p>CSS preprocesser</p>
                <p>Used throughout my projects to make styling faster and more dynamic.</p>
              </div>
            </div>
            <div className='logo_container lc5'><Postgresql/>
              <div>
                <h3>PostgreSQL</h3>
                <p>Relational database system</p>
                <p>I love working with databases. It's the database system that I'm most familiar with, allowing for long-term storage of information.</p>
              </div>
            </div>
            <div className='logo_container lc6'><Git/>
              <div>
                <h3>Git</h3>
                <p>Version control system for tracking changes in computer files.</p>
                <p>Git makes working on a team much more efficient. I've used git extensivley to manage changes throughout all of my projects.</p>
              </div>
            </div>
          </div>
          {/* <span className='more_tech'><h5>More Tech</h5><p>HTML5 | CSS3 | Redux | Express | Express Sessions | Massive</p></span> */}
        </div>
     
    );
  }
}

export default Skills;