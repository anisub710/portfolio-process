import React from 'react';
import ReactDOM from 'react-dom';
import {Tab, Tabs,Button, SideNav, SideNavItem, Navbar, NavItem, Row, CardPanel, Col, Card, CardTitle, Icon} from 'react-materialize';
import './index.css';
import MyNavBar from "./components/navbar";
import Project from "./views/project/projects";
import Experience from "./views/experience/experience";
import About from "./views/about/about";
import MyFooter from "./components/footer";
import "animate.css/animate.min.css";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    
        loading: true,
      }
    }
      componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 2400); // simulates an async action, and hides the spinner                        
      }
      
      render() {
            const { loading } = this.state;
            
            if(loading) { 
            return null; 
            }        
    return (                    
        <div>                 
            <MyNavBar/>             
            <div id = "about">                                               
                <About
                    aboutImage = "./img/profile_temp.svg"
                    aboutDesc = "Captivating introduction about me"                    
                />  
            </div>            
            <div id = "project">                                              
                <Row className = "projects-row">                 
                    <Project 
                        projectName = "344 Project"
                        projectImage = "./img/344 Unfinished.svg"
                        projectDesc = "Server Side Web Development"
                        githubLink = ""
                        infoTags = {[{tag: 'Go'}, {tag: 'Node.js'}, {tag: 'Javascript'}]}
                    />
                    <Project
                        projectName = "Indiceision"
                        projectImage = "./img/InDiceision.svg"
                        projectDesc = "Android application"                                             
                        githubLink = "https://github.com/heyjasonxu/Indiceision"
                        infoTags = {[{tag: 'Java'}, {tag: 'Android'}]}
                    />           
                    <Project
                        projectName = "Yama"
                        projectImage = "./img/Yama.svg"
                        projectDesc = "Android application"                                             
                        githubLink = "https://github.com/ask710/MessagingApp"
                        infoTags = {[{tag: 'Java'}, {tag: 'Android'}]}
                    />     
                    <Project
                        projectName = "Geopaint"
                        projectImage = "./img/Geopaint.svg"
                        projectDesc = "Android application"                        
                        githubLink = "https://github.com/ask710/Geopaint"
                        infoTags = {[{tag: 'Java'}, {tag: 'Android'}]}
                    />
                    <Project
                        projectName = "Eatout"
                        projectImage = "./img/eatout.svg"
                        projectDesc = "R application"                        
                        githubLink = "https://github.com/ask710/eatout"                        
                        projectLink = "https://ask710.shinyapps.io/eatout/"
                        infoTags = {[{tag: 'R'}]}
                    />   

                </Row>                    
            </div>
            <hr/>
            <div id = "experience">                 
                <Row className = "experience-row">                                 
                    <Experience
                        expImage = "./img/iSchool.svg"
                        expTitle =  "University of Washington Information School"  
                        infoTags = {[{tag: 'Teaching Assistant'}]} 
                        expDesc = "Captivating description of this experience"                    
                    /> 
                </Row>
                <Row className = "experience-row">                                 
                    <Experience
                        expImage = "./img/Indegene.svg"
                        expTitle =  "Indegene"  
                        infoTags = {[{tag: 'Internship'}]} 
                        expDesc = "Captivating description of this experience"                    
                    />   
                </Row>
                <Row className = "experience-row">  
                    <Experience
                        expImage = "./img/CloudCherry.svg"
                        expTitle = "CloudCherry"
                        infoTags = {[{tag: 'Internship'}]} 
                        expDesc = "Captivating description of this experience"                                        
                    />  
                </Row>
            </div>
            <MyFooter/>
        </div>
    );
  }  
}
  ReactDOM.render(<Portfolio />, document.querySelector('#root'));
   




