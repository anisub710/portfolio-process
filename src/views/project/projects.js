import React from 'react';
import ReactDOM from 'react-dom';
import {Parallax, Row,Col,Card, CardTitle} from 'react-materialize';
import $ from "jquery";
import '../../index.css';
import './projects.css';
// import FaGithub from 'react-icons/fa/github';



export default class Project extends React.Component  {

    render() {
        var FaGithub = require('react-icons/lib/fa/github');
        const {
            projectName,
            projectImage,
            projectDesc,
            projectLink            
        } = this.props;
        return(                             
                    <Col m = {6} l = {6} s={6}>
                        <Card header={<CardTitle reveal image= {projectImage} waves='light'/>}
                            title= {projectName}
                            reveal={projectDesc}>
                            <p><a className = "icon" href={projectLink}> {React.createElement(FaGithub, null)} </a></p>   
                        </Card>          
                    </Col>                          
        );
    }

}

            {/* <div className = "temp" id = "project">            
                <p> temporary text </p>
            </div>             */}