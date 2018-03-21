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
            <Navbar fixed = "true" className = "my-nav" brand= {<a href = "./index.html"> <img className = "menu"/> </a>} right>
                <NavItem className = "my-tab" href = {this.handleScroll}>Projects</NavItem>
                <NavItem className = "my-tab" href = "#E">Experience</NavItem>
                <NavItem className = "my-tab" href={require('../Resume.pdf')}>Resume</NavItem>
            </Navbar>
        );
    }



}