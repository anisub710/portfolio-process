import React from 'react';
import {Parallax, Row,Col,Card, CardTitle} from 'react-materialize';
import '../../index.css';
import './about.css'
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends React.Component  {

    render() {
        return( 
            <ScrollAnimation animateIn = "fadeIn" animateOnce = "true">
                <div id = "container">
                    <div id = "top">
                        <div id= "image-holder"></div>
                    </div>   
                    <div id = "bottom">
                        <p> about temporary text </p>                
                    </div>
                </div>   
            </ScrollAnimation>
        );
    }

}