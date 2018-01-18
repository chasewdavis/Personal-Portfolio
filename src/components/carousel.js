import React, { Component } from 'react';
import laptop from '../jpg/laptop.png';
import habits from '../jpg/habits.gif';
import codewars from '../jpg/codewars.gif';
import trivia from '../jpg/trivia.gif';
import './carousel.css';

import Slider from 'react-slick';

export default class SimpleSlider extends Component {

    render(){

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
            <div className='laptop-parent'>
                <img className='laptop' src={laptop} alt='laptop'/>
                <Slider className='slider' {...settings}>
                    <div className='img_container'><a target="_blank" rel="noopener noreferrer" href="http://trivia.chasedavis.io" className='visit'>Visit</a><img src={trivia} alt='trivia'/></div>
                    <div className='img_container'><a target="_blank" rel="noopener noreferrer" href="http://happyhabits.chasedavis.io" className='visit'>Visit</a><img src={habits} alt='habits'/></div>
                    <div className='img_container'><a target="_blank" rel="noopener noreferrer" href="http://codewarsclone.chasedavis.io" className='visit'>Visit</a><img src={codewars} alt='codewars'/></div>
                </Slider>
            </div>
        );  
    }
}
