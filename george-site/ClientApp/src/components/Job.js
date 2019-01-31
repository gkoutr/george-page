import React, { Component } from 'react';
import { Panel, Row, Col, Image } from 'react-bootstrap';
import cipherLogo from '../images/cipher_logo.jpg';
import './Job.css';
import { NavMenu } from './NavMenu';

function Job(props) {
    return (
        <div>
            <Panel>
                <Panel.Body>
                    <Row>
                        <Col md={3}>
                            <Image className="company-logo" src={cipherLogo} rounded/>
                        </Col>
                        <Col md={9}>
                            <Row>
                                 <p className="job-title">Software Engineer</p>
                                <p>Dec 2017 – Present</p>
                                <p>Annapolis, MD</p>
                            </Row>
                            <Row>
                                <ul>
                                    <li>Work in an Agile team to develop, test, and maintain a SAAS Competitive Intelligence application on Microsoft technologies.</li>
                                    <li>Design, develop, and unit test applications with established standards.</li>
                                    <li>Participate in peer-reviews of code and solutions.</li>
                                    <li>Create user-friendly UI's with JavaScript frameworks such as Knockout.js and JQuery.</li>
                                    <li>Create and maintain Web APIs to retrieve data.</li>
                                    <li>Write and maintain SQL Queries, Scripts and Stored Procedures to retrieve data.</li>
                                    <li>Use CSS, HTML, and Bootstrap to create user friendly desktop and mobile UIs.</li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                </Panel.Body>
            </Panel>
        </div>
    );
}
   

//export default class Job extends Component {

//    render() {
//        return (
            
//        );
//    }
//}
export default Job;
