    import React, { Component } from 'react';
import './Job.css';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



export default class Job extends Component {
    constructor(props){
        super(props);
        this.state = {
            job: props.job
        }
    }
   
    render() {
        return (
            <div className="job">
                <Card className="job-card">
                    <CardBody>
                        <Row>
                            <Col md={7} sm={12}>
                                <CardImg className="company-logo center-mobile smaller-width" top width="100%" src={require('../../images/' + this.state.job.logo)} />
                            </Col>
                            <Col md={5} sm={12}>
                                <div className="center-job-info">
                                    <CardTitle className="h4">{this.state.job.companyName}</CardTitle>
                                    <CardSubtitle className="font-weight-bold">{this.state.job.jobTitle}</CardSubtitle>
                                    <CardText>{this.state.job.startDate} – {this.state.job.endDate}</CardText>
                                    <CardText className="job-location">{this.state.job.location}</CardText>
                                </div>

                            </Col>

                        </Row>
                        <h5 className="text-center">Job Duties</h5>
                        <ol>
                            {this.state.job.jobDuties.map(duty =>
                                <li key={duty}>{duty}</li>
                            )}
                        </ol>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
}
   