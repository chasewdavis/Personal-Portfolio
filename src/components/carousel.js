import React, { Component } from 'react';
import laptop from '../jpg/laptop.png';
import habits from '../jpg/habits.gif';
import codewars from '../jpg/codewars.gif';
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
                    <div className='img_container'><button className='visit'>Visit</button><img src={habits} alt='habits'/></div>
                    <div className='img_container'><button className='visit'>Visit</button><img src={codewars} alt='codewars'/></div>
                </Slider>
            </div>
        );  
    }
}
