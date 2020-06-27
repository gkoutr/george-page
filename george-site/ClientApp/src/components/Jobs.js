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
            jobs: [], name: "George Koutroumpis", title: "Software Engineer", location: "Annapolis, MD",
            isLoading: true
        }
        
    }

    componentDidMount() {
        fetch('api/about/jobs')
            .then(response => response.json())
            .then(data => {
                this.setState({ jobs: data, isLoading: false })
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
                        {this.state.jobs.map(job =>
                            <Col md={6} key={job.id}>
                                <Job job={job} />
                            </Col>
                        )}
                    </Row>
                </div>
            );
        }
        
    }
};