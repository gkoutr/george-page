﻿import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, Spinner
} from 'reactstrap';
import School from './subcomponents/School';
import Cert from './subcomponents/Certification';
import Skill from './subcomponents/Skill';
import './Education.css';

export class Education extends Component {
    displayName = Education.name;

    constructor(props) {
        super(props);
        this.state = {
            schools: [],
            certs: [],
            skills: [],
            isLoading: true
        }

    }

    componentDidMount() {
        fetch('api/About/GetEducation')
            .then(response => response.json())
            .then(data => {
                this.setState({ schools: data.schoolList,  certs: data.certList, skills: data.skillList, isLoading: false})
            })
    }

    render() {
        if (this.state.isLoading) {
            return (<div><Spinner className="image-center" style={{ width: '5rem', height: '5rem' }} />{' '}</div>);
        }
        else {
            return (
                <div className="edu">
                    <div className="edu-section">
                        <h1 className="text-center">Education</h1>
                        <hr></hr>
                        <Row>
                            {this.state.schools.map(school =>
                                <School key={school.id} school={school} />
                            )}
                        </Row>
                    </div>
                    <div className="edu-section">
                        <h1 className="text-center">Certifications</h1>
                        <hr></hr>
                        <Row>
                            {this.state.certs.map(cert =>
                                <Cert key={cert.id} cert={cert} />
                            )}
                        </Row>
                    </div>
                    <div className="edu-section">
                        <h1 className="text-center">Skills</h1>
                        <hr></hr>
                        <Row>
                            <Col md={12}>
                                <Card className="skills-card">
                                    <CardBody>
                                        {this.state.skills.map(skill =>
                                            <Skill key={skill.id} skill={skill} />
                                        )}
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            );
        }
    }
}; 