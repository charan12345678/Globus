import React from 'react'
import Home from './Home';
// import { Carousel } from 'react-bootstrap';
import Carousel from './Carousel'
import Clip__path from './Clip__path';
import College2 from './College2';
import { Product2, Product3, Product4 } from './Product2';
import "./Product2.css"

function Landingpage() {
    return (
        <div>
        <Home/>
        <Carousel/>
        <Clip__path/>
        <College2/>
        <div className="home__row">
                <Product2/>
                <Product3/>
                <Product4/>
                <Product2/>
            </div> 
        </div>
    )
}

export default Landingpage
