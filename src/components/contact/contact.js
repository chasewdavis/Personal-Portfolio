import React, { Component } from 'react';
import './contact.css';
import Github from '../../svg/links/github.js';
import LinkedIn from '../../svg/links/linkedin.js';
import Mail from '../../svg/links/mail.js';
import CodePen from '../../svg/links/codepen.js';


class Contact extends Component {

  render() {
    
    return (

      <div className='contact'>
        <header>
          Get In Touch
        </header>

        <div className='links'>
            
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/chasewdavis">
              <Github/>
              <h3 data-before="github.com/chasewdavis">github.com/chasewdavis</h3>
            </a>
          
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cwdvs/">
              <LinkedIn/>
              <h3 data-before="linkedin.com/in/cwdvs">linkedin.com/in/cwdvs</h3>
            </a>
          
            <a target="_blank" rel="noopener noreferrer" href="mailto: chasewdavis7@gmail.com">
              <Mail/>
              <h3 data-before="chasewdavis7@gmail.com">chasewdavis7@gmail.com</h3>
            </a>

            <a target="_blank" href="https://codepen.io/chasedavis/">
              <CodePen/>
              <h3 data-before="codepen.io/chasedavis">codepen.io/chasedavis</h3>
            </a>

        </div>

        <footer>
          Designed and crafted by me, Chase Davis © 2018
        </footer>
      </div>
     
    );
  }
}

export default Contact;
