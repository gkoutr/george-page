import React, { Component } from 'react';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import logo from '../images/cipher_logo.jpg'

export class Education extends Component {
    displayName = Education.name;

    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        displayName: this.displayName
    //    }
    //}
    render() {
        return (
            <div>
                <h1 className="text-center">{this.displayName}</h1>
                <Row>
                    <Col md={6}>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md={6}>
                                        <CardTitle className="h4">Towson University</CardTitle>
                                        <CardSubtitle className="font-weight-bold">Bachelor of Science,<span>Computer Science</span></CardSubtitle>
                                        <CardText>Aug 2013 - Dec 2016</CardText>
                                        <CardText className="job-location">Towson, MD</CardText>
                                    </Col>
                                    <Col md={6}>
                                        <CardImg className="company-logo" top width="100%" src="{logo}" />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </div>
        );
    }
};