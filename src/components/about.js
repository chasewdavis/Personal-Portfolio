import React, { Component } from 'react';
import './about.css'

class About extends Component {

  render() {

    return (
      
        <div className='about_grid'>
            <div className='cover_grid'></div>
            <header>
            <h1><span>C</span>hase <span>D</span>avis</h1>
            <h2>Stop Wishing. Start Doing.</h2>
            </header>

            <footer>
              <i class="fa fa-angle-down fa-5x" aria-hidden="true"></i>
            </footer>

        </div>
     
    );
  }
}

export default About;