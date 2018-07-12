import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Navbar, NavItem, Icon} from 'react-materialize';
import $ from "jquery";
import '../index.css';
import './navbar.css';

export default class MyNavBar extends React.Component  {

    timer(place){
        var go = document.getElementById(place);        
        var current = window.pageYOffset;
        var threshold = go.offsetTop;        
        var timerID;
        if(threshold - current > 100){
            var t = 1;
            var timerID = setInterval(function() {                
                window.scrollBy(0, t);
                if(window.pageYOffset >= threshold - 50) {
                    clearInterval(timerID);                
                }
                t = t + 1;
            }, 10);         
        } 
        else if (threshold < current) {  
            var t = 1;      
            var timerID = setInterval(function() {        
                window.scrollBy(0, -t);
                if(window.pageYOffset <= threshold - 50) {
                    clearInterval(timerID);
                }
                t = t + 1;
            }, 10);        
        }     
        return timerID;
    
    }     


    render() {  
        document.onscroll = () => {
            let project = document.getElementById("project");
            let projectTab = document.getElementById("project-tab");
            let experience = document.getElementById("experience");
            let experienceTab = document.getElementById("experience-tab");
            let current = window.pageYOffset + 100;
            if(project.offsetTop <= current && 
            project.offsetTop + project.offsetHeight > current){
                projectTab.children[0].classList.add("scroll-active");  
                experienceTab.children[0].classList.remove("scroll-active");
            }else if(experience.offsetTop <= current && 
                experience.offsetTop + experience.offsetHeight > current ){
                projectTab.children[0].classList.remove("scroll-active");  
                experienceTab.children[0].classList.add("scroll-active");
            }
            else {
                projectTab.children[0].classList.remove("scroll-active");
                experienceTab.children[0].classList.remove("scroll-active");
            }
        }    
    return (     
        <div>           
            <Navbar fixed = "true" className = "my-nav" brand= {<img className = "menu"/>} right>
                <NavItem id = "project-tab" className = "my-tab" href = "#Project" onClick = {() => {this.timer("project")}}>Projects</NavItem>
                <NavItem id = "experience-tab" className = "my-tab" href = "#Experience" onClick = {() => {this.timer("experience")}}>Experience</NavItem>
                <NavItem className = "my-tab" href={require('../Resume.pdf')}>Resume</NavItem>
            </Navbar>
            <Button id = "up-btn" title = "Go back to About" onClick = {() => {this.timer("about")}} floating icon='arrow_drop_up' className='blue' large >
            </Button> 
        </div>
    );


    }



}
