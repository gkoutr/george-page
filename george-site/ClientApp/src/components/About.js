import React, { Component } from 'react';
import logo from '../profile-picture.jpeg';
import { Col, Row, Image } from 'react-bootstrap';
import './About.css';

export class About extends Component {
    displayName = About.name

    state = {
        name: "George Koutroumpis",
        description: "Software Engineer",
        location: "Annapolis, MD"
    }
    //constructor(props) {
    //    super(props);
    //    this.state = "test";
    //    debugger;
    //}

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={3}>
                        <img src={logo} />
                    </Col>
                    <Col md={9}>
                        <h1>{this.state.name}</h1>
                        <h4>{this.state.description}</h4>
                        <h4>{this.state.location}</h4>
                        <a className="linkedin-link" target="_blank" href="https://www.linkedin.com/in/george-koutroumpis-065629122/">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a className="github-link" target="_blank" href="https://github.com/gkoutr">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </Col>
                </Row>
                
               
             </div>
            );
    }
};

About.defaultProps = {
    name: "George",
    age: "26"
}