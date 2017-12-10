import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';
// import timp from '../jpg/timp.jpg';
// import desk from '../jpg/desk.jpeg';
import laptop from '../jpg/laptop.png';
import habits from '../jpg/habits.gif';
import codewars from '../jpg/codewars.gif';
import './carousel.css';

// var React = require('react');

import Slider from 'react-slick';

export default class SimpleSlider extends Component {

    render(){

        // let showMe = document.getElementsByClassName('slick-next')[0];
        // if(showMe){
        //     showMe.addEventListener("click", function(){
        //         console.log('wooorrrrrkkkk')
        //     })
        // }

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
