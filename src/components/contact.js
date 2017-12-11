import React, { Component } from 'react';
import './contact.css';



class Contact extends Component {

  render() {
    
    return (
      
      <div className='contact_grid'>
        {/* <div className='background'></div> */}
        <h3 className='header'>Get In Touch</h3>
        <div className='body'>
          <div className='left'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chase-davis-085aa6134/">
              <i class="fa fa-linkedin-square fa-5x" aria-hidden="true"></i>
            </a>
            <h2>/in/cwdvs</h2>
          </div>
          <div className='middle'>
            <a target="_blank" rel="noopener noreferrer" href="mailto: chasewdavis7@gmail.com">
              <i class="fa fa-telegram fa-5x" aria-hidden="true"></i>
            </a>
            <h2>chasewdavis7@gmail.com</h2>
          </div>
          <div className='right'>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/chasewdavis">
              <i class="fa fa-github-square fa-5x" aria-hidden="true"></i>
            </a>
            <h2>/chasewdavis</h2>
          </div>
        </div>
        <div className='footer'>
          Designed and crafted by me, Chase Davis © 2017
        </div>
      </div>
     
    );
  }
}

export default Contact;