import React, { Component } from 'react';
import {
    Row, Col, Spinner
} from 'reactstrap';
import Job from './subcomponents/Job';
import './Jobs.css';

export class Jobs extends Component {
    displayName = Jobs.name

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
            <div>
                
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