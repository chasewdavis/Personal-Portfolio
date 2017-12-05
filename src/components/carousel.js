import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import timp from '../jpg/timp.jpg';
import desk from '../jpg/desk.jpeg';
import './carousel.css';

export default class DemoCarousel extends Component {
    render() {
        return (
            <div className='carousel'>
            <Carousel>
                <div>
                    <img src={timp} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={desk} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={timp} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));