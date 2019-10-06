import React, { Component } from 'react';
import {
    Card, CardImg, CardText, Col,Row,
    CardTitle, CardSubtitle, Button, Spinner
} from 'reactstrap';
import Project from './subcomponents/Project';
import Cert from './subcomponents/Certification';
import Skill from './subcomponents/Skill';

export class Projects extends Component {
    displayName = Projects.name;

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
                this.setState({ schools: data.schoolList, certs: data.certList, skills: data.skillList, isLoading: false })
            })
    }


    render() {
        if (this.state.isLoading) {
            return (<div><Spinner className="image-center" style={{ width: '5rem', height: '5rem' }} />{' '}</div>);
        }
        else {
            return (
                <div>
                    <Row>
                        <Col md={4}>
                            <Project />
                        </Col>
                    </Row>
                   
                </div>     
            );
        }

    }
}; 