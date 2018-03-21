import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavItem, Icon} from 'react-materialize';
import $ from "jquery";
import '../index.css';
import './navbar.css';

export default class MyNavBar extends React.Component  {

    // handleScroll(event) {
    //     const tesNode = ReactDOM.findDOMNode(this.refs["Experience"]);
    //     console.log("This is the test Node" + this.refs);
    //     window.scrollTo(0, tesNode.offsetTop);
    // }
    

    render() {        
    return (                
        <Navbar fixed = "true" className = "my-nav" brand= {<img className = "menu"/>} right>
        <NavItem className = "my-tab" href = "#Project" onClick = {() => {timer("project")}}>Projects</NavItem>
        <NavItem className = "my-tab" href = "#Experience" onClick = {() => {timer("experience")}}>Experience</NavItem>
            <NavItem className = "my-tab" href={require('../Resume.pdf')}>Resume</NavItem>
        </Navbar>
    );


    }



}

function timer(place){
    var go = document.getElementById(place);
    var current = window.pageYOffset;
    var threshold = go.offsetTop;
    console.log(threshold + " " + current);
    if(threshold - current > 100){
        var timerID = setInterval(function() {
            console.log ("greater");
            window.scrollBy(0, 20);
            if(window.pageYOffset >= threshold - 50) {
                clearInterval(timerID);                
            }
        }, 10); 
        return timerID; 
    } 
    else if (threshold < current) {        
        var timerID = setInterval(function() {        
            console.log ("lesser");
            console.log(threshold + " " + window.pageYOffset);
            window.scrollBy(0, -20);
            if(window.pageYOffset <= threshold - 50) {
                clearInterval(timerID);
            }
                
        }, 10);
        return timerID;
    }     
    return null;

} 