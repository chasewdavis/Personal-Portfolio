import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';
import timp from '../jpg/timp.jpg';
import desk from '../jpg/desk.jpeg';
import laptop from '../jpg/laptop.png';
import './carousel.css';

// var React = require('react');

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
                    <img src={timp} alt='timp'/>
                    <img src={desk} alt='desk'/>
                    <img src={timp} alt='timp'/>
                    <img src={desk} alt='desk'/>
                </Slider>
            </div>
        );  
    }
}
