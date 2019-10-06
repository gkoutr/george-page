import React, { Component } from 'react';
import './Job.css';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: props.job
        }
    }

    render() {
        return (
            <div className="project">
                <Card className="project-card">
                    <CardBody>
                        <Row>
                            <a href="https://item-price-tracker.herokuapp.com">

                                <CardImg top width="100%" src={require('../../images/photo-unavailable.jpg')} alt="Card image cap" />
                            </a>
                                <CardBody>
                                <CardTitle>Video Game Price Tracker</CardTitle>
                                <CardText>Test text</CardText>
                                <CardText>Stack: Node.js, KnockoutJS, express, mongodb, heroku</CardText>

                                <Button>Button</Button>
                                <Button><i className="fab fa-github"></i></Button>
                            </CardBody> 
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }

}
