import React, { Component } from 'react';
import logo from '../images/towson.png';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import School from './subcomponents/School';
import Cert from './subcomponents/Certification';
import Skill from './subcomponents/Skill';
import './Education.css';

export class Education extends Component {
    displayName = Education.name;

    constructor(props) {
        super(props);
        this.state = {
            schools: [],
            certs: [],
            skills: []
        }

    }

    componentDidMount() {
        fetch('api/About/GetEducation')
            .then(response => response.json())
            .then(data => {
                this.setState({ schools: data.schoolList,  certs: data.certList, skills: data.skillList})
            })
    }

    render() {
        return (
            <div className="edu">
                <div className="edu-section">
                    <h1 className="text-center">{this.displayName}</h1>
                    <hr></hr>
                    <Row>
                        {this.state.schools.map(school =>
                            <School key={school.id} school={school} />
                        )}

                    </Row>
                </div>
                <div className="edu-section">
                    <h1 className="text-center">Certifications</h1>
                    <hr></hr>
                    <Row>
                        {this.state.certs.map(cert =>
                            <Cert key={cert.id} cert={cert} />
                        )}
                    </Row>
                </div>
                <div className="edu-section">
                    <h1 className="text-center">Skills</h1>
                    <hr></hr>
                    <Row>
                        <Col md={12}>
                            <Card className="skills-card">
                                <CardBody>
                                    {this.state.skills.map(skill =>
                                        <Skill key={skill.id} skill={skill} />
                                        )}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                
            </div>

        );
    }
}; { /* <Row>
                                        <Col md={3}>
                                            <label>Programming Languages:</label>
                                        </Col>
                                        <Col md={9}>
                                            <CardText>C#, HTML, CSS3, LESS, JavaScript, Java, SQL, JSON, XML</CardText>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <label>Front-End Frameworks:</label>
                                        </Col>
                                        <Col md={9}>
                                            <CardText>Bootstrap, Semantic-UI</CardText>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <label>JavaScript Frameworks:</label>
                                        </Col>
                                        <Col md={9}>
                                            <CardText>Knockout.js, React, JQuery</CardText>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <label>Cloud Services:</label>
                                        </Col>
                                        <Col md={9}>
                                            <CardText>Heroku, Jenkins</CardText>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <label>Database Management:</label>
                                        </Col>
                                        <Col md={9}>
                                            <CardText>SQL Server</CardText>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <label>Software & IDE:</label>
                                        </Col>
                                        <Col md={9}>
                                            <CardText>Visual Studio, Visual Studio Code, Eclipse, IntelliJ IDEA, Sublime Text, Microsoft Word, Microsoft Excel</CardText>
                                        </Col>
                                    </Row>*/}