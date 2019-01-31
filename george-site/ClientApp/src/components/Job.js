import React, { Component } from 'react';
import './Job.css';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Job(props) {
    
    const job = props.job;
    return (
        <div className="job-card">
            <Card> 
                <CardBody>
                    <Row>
                        <Col md={6}>
                            <CardTitle className="h4">{job.companyName}</CardTitle>
                            <CardSubtitle className="font-weight-bold">{job.jobTitle}</CardSubtitle>
                            <CardText>{job.startDate} – {job.endDate}</CardText>
                            <CardText className="job-location">{job.location}</CardText>
                        </Col>
                        <Col md={6}>
                            <CardImg className="company-logo" top width="100%" src={require('../images/' + job.logo)} />
                        </Col>
                    </Row>
                    <h5 className="text-center">Job Duties</h5>
                        <ol>
                        {job.jobDuties.map(duty =>
                            <li key={duty}>{duty}</li>
                            )}
                        </ol>
                </CardBody>
            </Card>
        </div>
    );
}
   
export default Job;
