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

    constructor(props) {
        super(props);
        this.state = {
            jobs: [], name: "George Koutroumpis", title: "Software Engineer", location: "Annapolis, MD"
        }
        
    }

    componentDidMount() {
        fetch('api/About/GetJobs')
            .then(response => response.json())
            .then(data => {
                this.setState({jobs: data})
            })
    }

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
                    {this.state.jobs.map(job =>
                        <Col md={6} key={job.id}>
                            <Job job={job} />
                        </Col>
                    )}
                </Row>
             </div>
            );
    }
};