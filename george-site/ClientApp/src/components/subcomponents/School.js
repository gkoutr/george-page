import React, { Component } from 'react';
import './School.css';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function School(props) {

    function hasDegree(school) {
        if (school.degree == "") {
            return <CardSubtitle><span>{school.major}</ span></CardSubtitle>
        }
        return <CardSubtitle>{school.degree}, <span>{school.major}</span></CardSubtitle>
    }

    const school = props.school;
    return (
        <Col md={6}>
            <Card className="school-card">
                <CardBody>
                    <Row>
                        <Col md={9}>
                            <CardTitle className="job-title">{school.name}</CardTitle>
                            {/*<CardSubtitle className="font-weight-bold"><span>{school.major}</span></CardSubtitle>*/}
                            {hasDegree(school)}
                            <CardText>{school.startDate} - {school.endDate}</CardText>
                            <CardText className="job-location">{school.location}</CardText>
                        </Col>
                        <Col md={3}>
                            <CardImg className="school-logo" top width="100%" src={require('../../images/' + school.logo)} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    );
}

export default School;
