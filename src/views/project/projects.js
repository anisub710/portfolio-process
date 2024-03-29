import React from 'react';
import {Row,Col,Card, CardTitle, Badge} from 'react-materialize';
import '../../index.css';
import './projects.css';
import Chip from 'react-materialize/lib/Chip';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
// import FaGithub from 'react-icons/fa/github';



export default class Project extends React.Component  {

    render() {        
        var FaGithub = require('react-icons/lib/fa/github');
        var web = require('react-icons/lib/md/web-asset');
        const {
            projectName,
            projectImage,
            projectDesc,            
            githubLink,            
            projectLink,
            infoTags            
        } = this.props;
        
        function TagsList({infoTags}) {
            return infoTags.map(infoTag => (
                <Chip>{infoTag.tag}</Chip>
            ));
        }
        
        function LinkWebsite(props) {
            const hasLink = props.hasProjectLink;
            if (hasLink) {
                return <a className = "icon" href = {props.projectLink}> {React.createElement(web, null)}> </a>
            }
        }
        return(                                                                         
                <Col m={6} xl={4}>
                <ScrollAnimation animateIn = "fadeInUpBig" animateOnce = {true}> 
                    <Card header={<CardTitle reveal image= {projectImage} waves='light'/>}
                        title= {projectName}
                        reveal={projectDesc}>
                        <TagsList infoTags = {infoTags}/>
                        <p><a className = "icon" href={githubLink}> {React.createElement(FaGithub, null)} </a>                    
                        {projectLink != null && 
                            <a className = "icon" href = {projectLink}> {React.createElement(web, null)}> </a>
                        }                    
                        </p>                               
                    </Card>          
                </ScrollAnimation>
                </Col>               
        );
    }

}


            {/* <div className = "temp" id = "project">            
                <p> temporary text </p>
            </div>             */}