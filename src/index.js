import React from 'react';
import ReactDOM from 'react-dom';
import {Tab, Tabs,Button, SideNav, SideNavItem, Navbar, NavItem, Row, CardPanel, Col, Card, CardTitle, Icon} from 'react-materialize';
import $ from "jquery";
import './index.css';
import MyNavBar from "./components/navbar";
import Project from "./views/project/projects";
import Experience from "./views/experience/experience";
import About from "./views/about/about";
import Parallax from 'react-materialize/lib/Parallax';

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
                <h2> Anirudh Subramanyam </h2>                                
                <About/>  
            </div>            
            <div id = "project">
                <h2> Projects </h2>                                
                <Row className = "projects-row"> 
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
            <div id = "experience">                                 
                <Experience/>                
            </div>
        </div>
    );
  }  
}
  ReactDOM.render(<Portfolio />, document.querySelector('#root'));
   
          {/* <Card className='small'
        header={<CardTitle image={require('./eatout.png')}>Card Title</CardTitle>}
  actions={[<a href="https://www.google.com">This is a Link</a>]}>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
    </Card>     */}



