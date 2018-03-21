import React from 'react';
import ReactDOM from 'react-dom';
import {Tab, Tabs,Button, SideNav, SideNavItem, Navbar, NavItem, Row, CardPanel, Col, Card, CardTitle, Icon} from 'react-materialize';
import $ from "jquery";
import './index.css';
import MyNavBar from "./components/navbar"
import Project from "./views/project/projects"
import Experience from "./views/experience/experience"

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    
        loading: true,
      }
    }
      componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 6000); // simulates an async action, and hides the spinner                
      }
      
      render() {
        const { loading } = this.state;
        
        if(loading) { 
          return null; 
        }
        
    return (             
        <div>                   
            <MyNavBar/>
            <a href = "#P">
            <Project/>
            </a>
            <a href = "#E">
            <Experience ref = "Experience"/>
            </a>
        </div>
    );
  }  
}

  ReactDOM.render(<About />, document.querySelector('#root'));

          {/* <Card className='small'
        header={<CardTitle image={require('./eatout.png')}>Card Title</CardTitle>}
  actions={[<a href="https://www.google.com">This is a Link</a>]}>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
    </Card>     */}



