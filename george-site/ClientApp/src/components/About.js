import React, { Component } from 'react';
import logo from '../images/profile-picture.jpeg';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Job from './Job';
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

    //componentDidMount() {
    //    fetch('api/about/jobs')
    //        .then(response => response.json())
    //        .then(data => {
    //            console.log(data);
    //        })
    //}

    //render() {
    //    return (
    //        <div>
    //            <Card>
    //                <CardBody>
    //                    <Row>

    //                    <Col md={3}>
    //                            <CardImg top src={logo} alt="Card image cap" />
    //                    </Col>
    //                        <Col md={9}>
    //                            <CardTitle>{this.state.name}</CardTitle>
    //                    </Col>
    //                    </Row>
    //                </CardBody>
    //            </Card>
    //        </div>
    //    );
    //}

    //render() {
    //    return (
    //        <div>
    //            <Row>

    //                <Col md={3}>
    //                    <img top src={logo} alt="Card image cap" />
    //                </Col>
    //                <Col md={9}>
    //                    <h3>{this.state.name}</h3>
    //                    <h4>{this.state.description}</h4>
    //                   <h4>{this.state.location}</h4>
    //                </Col>
    //            </Row>
    //        </div>
    //    );
    //}

    render() {
        
        return (
            <div className="basic-info">
                <Row>
                    <Col md={3}>
                        <img src={logo} />
                    </Col>
                    <Col md={9}>
                        <div>
                            <h5>{this.state.name}</h5>
                            <p className="textStyle">{this.state.description}</p>
                            <p>{this.state.location}</p>
                        </div>
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
                <Row>
                    <Col md={12}>
                        <Job test={this.state.name}/>
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