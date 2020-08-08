import React from 'react' ;
import PhotoSlide from './PhotoSlide' ;
import Cards from './Cards' ;
import Navigation from './Navigation' ;

export default function Home() {
    return (
        <div>
            <Navigation />
            <PhotoSlide />
            <Cards />
        </div>
    )
}