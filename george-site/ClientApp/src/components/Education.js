import React, { Component } from 'react';
import logo from '../images/towson.png';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import School from './subcomponents/School';
import Cert from './subcomponents/Certification';


export class Education extends Component {
    displayName = Education.name;

    constructor(props) {
        super(props);
        this.state = {
            schools: [],
            certs: []
        }

    }

    componentDidMount() {
        fetch('api/About/GetEducation')
            .then(response => response.json())
            .then(data => {
                this.setState({ schools: data.schoolList,  certs: data.certList})
            })
    }

    render() {
        return (
            <div className="edu">
                <h1 className="text-center">{this.displayName}</h1>
                <Row>
                    {this.state.schools.map(school =>
                        <School key={school.id} school={school}/>
                    )}
                    
                </Row>
                <h1 className="text-center">Certifications</h1>
                <Row>
                    {this.state.certs.map(cert =>
                        <Cert key={cert.id} cert={cert} />
                    )}
                </Row>
            </div>

        );
    }
};