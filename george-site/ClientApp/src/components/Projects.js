import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, Spinner, CardImg, CardTitle, CardSubtitle, CardText, Button 
} from 'reactstrap';
import Project from './subcomponents/Project';

export class Projects extends Component {
    displayName = Projects.name;

    constructor(props) {
        super(props);
        this.state = {
            projects: [], 
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('api/About/GetProjects')
            .then(response => response.json())
            .then(data => {
                this.setState({ projects: data, isLoading: false })
            })
    }


    render() {
        if (this.state.isLoading) {
            return (<div><Spinner className="image-center" style={{ width: '5rem', height: '5rem' }} />{' '}</div>);
        }
        else {
            return (
                <div className="proj">
                    <div className="proj-section">
                        <h1 className="text-center">Projects</h1>
                        <hr></hr>
                        <Row>
                            {this.state.projects.map(project =>
                                <Project key={project.id} project={project} />
                            )}
                        </Row>
                    </div>
                 
                </div>
            );
        }

    }
}; 