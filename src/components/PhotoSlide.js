import React from 'react' ;
import { Carousel } from 'react-bootstrap' ;
import './PhotoSlide.css' ;
import holder2 from '../img/holder2.jpg' ;


export default function PhotoSlide() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-box w-100"
                src={holder2} 
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First Step</h3>
                <p>Post on our app (whether you have or need a spot)</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-box w-100"
                src={holder2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second Step</h3>
                <p>Find someone that fits your criteria and contact them.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-box w-100"
                src={holder2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Final Step</h3>
                <p>Talk to your match and figure out the details!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}