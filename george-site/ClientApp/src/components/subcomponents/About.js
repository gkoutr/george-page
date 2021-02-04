import React, { Component } from 'react';
import logo from '../../images/test-profile.jpg';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


export class About extends Component {
    displayName = About.name

    constructor(props) {
        super(props);
        this.state = {
            name: "George Koutroumpis", title: "Software Engineer", location: "Annapolis, MD",
            description: "I'm a Full Stack Software Engineer that has helped build high quality software ranging from SaaS applications in .NET Core to back-end microservices in Spring boot. I'm always eagar to learn new technologies in this ever-changing field."
        }
    }

    render() {
        return (
            <div className="basic-info">
                <Row>
                    <Col md={2}>
                        <img className="center-mobile" src={logo} />
                    </Col>
                    <Col md={3} className="center-mobile-text">
                        <div >
                            <h5>{this.state.name}</h5>
                            <p>{this.state.location}</p>
                        </div>
                        <a className="linkedin-link" target="_blank" href="https://www.linkedin.com">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a className="github-link" target="_blank" href="https://github.com">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a className="mail-link" target="_blank"  href="mailto:gjkoutroumpis@gmail.com">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a className="blogger-link" target="_blank" title="My Blog" href="https://www.gkoutr.com">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-blog fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a className="pluralsight-link" target="_blank" title="Pluralsight Profile" href="https://app.pluralsight.com/profile/george-koutroumpis">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-chalkboard fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </Col>
                    <Col md={7}>
                        <p className="textStyle">{this.state.description}</p>
                    </Col>
                </Row>
            </div>
          )
    }
};