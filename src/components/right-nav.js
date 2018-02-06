import React, { Component } from 'react';
import jump from 'jump.js';
import './rightnav.css';

export default class RightNav extends Component {

    render(){
        return(
            <div>
            <div className='fixed-top'></div>
            <div className='fixed-right-navbar'>
                <div className='img-container'></div>
                <div className='img-filler'></div>
                <button onClick={()=>{jump('#zero', {offset:-48})}} className={this.props.section===1?'highlight-btn about-btn':'unhighlight-btn about-btn'}>Home</button>
                <button onClick={()=>{jump('#two', {offset:0})}} className={this.props.section===2?'highlight-btn skills-btn':'unhighlight-btn skills-btn'}>Skills</button>
                <button onClick={()=>{jump('#three', {offset:-12})}} className={this.props.section===3?'highlight-btn projects-btn':'unhighlight-btn projects-btn'}>Projects</button>
                <button onClick={()=>{jump('#four', {offset:-12})}} className={this.props.section===4?'highlight-btn contact-btn':'unhighlight-btn contact-btn'}>Contact</button>
                <div className='links'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chase-davis-085aa6134/">
                <div className='circle_link'>
                    <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
                </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/chasewdavis">
                <div className='no_circle_link'>
                    <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto: chasewdavis7@gmail.com">
                <div className='circle_link'>
                    <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
                </div>
                </a>
                </div>
            </div>
            <div className='fixed-bottom'></div>
            </div>
        )
    }
}