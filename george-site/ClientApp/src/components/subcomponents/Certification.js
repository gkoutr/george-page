import React, { Component } from 'react';
import './Job.css';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Cert(props) {

    const cert = props.cert;
    return (
        <Col md={6}>
            <Card className="cert-card">
                <CardBody>
                    <Row>
                        <Col md={9} sm={12} className="school-info">
                            <CardTitle className="job-title">{cert.name}</CardTitle>
                            <CardSubtitle>Exam: {cert.exam}</CardSubtitle>
                            <CardSubtitle>{cert.organization}</CardSubtitle>

                            <CardText>{cert.startDate} - {cert.endDate}</CardText>
                        </Col>
                        <Col md={3} sm={12}>
                            <CardImg className="school-logo" top width="100%" src={require('../../images/' + cert.orgLogo)} />
                            <a className="cert-link" href={cert.credentialUrl} target="_blank">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Cert;
