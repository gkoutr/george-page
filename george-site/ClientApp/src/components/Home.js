import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col, Spinner
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MetaTags from 'react-meta-tags';


export class Home extends Component {
  displayName = Home.name

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('api/About/GetPosts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data, isLoading: false })
            })
    }

    render() {
        if (this.state.isLoading) {
            return (<div><Spinner className="image-center" style={{ width: '5rem', height: '5rem' }} />{' '}</div>);
        }
        else {
            return (
                <div>
                    <MetaTags>
                        <meta name="author" content="George Koutroumpis" />
                    </MetaTags>
                    <h1 className="text-center">Blog Posts</h1>
                    <hr></hr>
                    <Row>
                        <Col md={3}>
                            {this.state.posts.map(post =>
                                <LinkContainer key={post.id} to={{
                                    pathname: '/post/' + post.id,
                                    state: { post }
                                }
                                } style={{ cursor: 'pointer' }}>
                                    <Card>
                                        <CardImg top className="image-center" src={require('../images/' + post.image)} alt="post image" />
                                        <CardBody>
                                            <CardTitle><strong>{post.title}</strong></CardTitle>
                                            <CardText>{post.shortDescription}</CardText>
                                        </CardBody>
                                    </Card>
                                </LinkContainer>
                            )}
                        </Col>
                    </Row>


                </div>
            );
        }
       
    }
}
