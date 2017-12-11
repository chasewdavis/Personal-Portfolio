import React, { Component } from 'react';
import './about.css'

class About extends Component {

  render() {

    return (
      
        <div className='about_grid'>
            <div className='cover_grid'></div>
            <header>
            <h1>Developer</h1>
            <h2>Designer</h2>
            <h3>Doer</h3>
            <h4>Chase Davis</h4>
            </header>

            <footer>
              <i class="fa fa-angle-down fa-5x" aria-hidden="true"></i>
            </footer>

        </div>
     
    );
  }
}

export default About;