import React, { Component } from 'react';
import logo from '../images/towson.png';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import School from './subcomponents/School';


export class Education extends Component {
    displayName = Education.name;

    constructor(props) {
        super(props);
        this.state = {
            schools: []
        }

    }

    componentDidMount() {
        fetch('api/About/GetSchools')
            .then(response => response.json())
            .then(data => {
                this.setState({ schools: data })
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
            </div>
        );
    }
};