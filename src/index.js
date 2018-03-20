import React from 'react';
import ReactDOM from 'react-dom';
import {Tab, Tabs,Button, SideNav, SideNavItem, Navbar, NavItem, Row, CardPanel, Col, Card, CardTitle, Icon} from 'react-materialize';
import $ from "jquery";
import './index.css';

function App() {
    return (                
<Navbar brand= {<img src = {require("./img/Group.png")}/>} left>
  <NavItem href='get-started.html'>Getting started</NavItem>
  <NavItem href='components.html'>Components</NavItem>
</Navbar>
    );
  }
  
  ReactDOM.render(<App />, document.querySelector('#root'));

          {/* <Card className='small'
        header={<CardTitle image={require('./eatout.png')}>Card Title</CardTitle>}
  actions={[<a href="https://www.google.com">This is a Link</a>]}>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
    </Card>     */}