import React, { Component } from 'react';
import Gist from 'react-gist';
import Interweave from 'interweave';
import {
    Card, CardImg, CardText, CardBody, CardHeader, CardFooter,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';


function addGist(gistId) {
    if (gistId != "")
        return <Gist id={gistId} />
    return null;
};
export class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            post: {}
        }
    }
    componentWillMount() {
        this.setState({ post: this.props.location.state.post })
        
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader tag="h6">{this.state.post.title}</CardHeader>
                    <CardBody>
                        {this.state.post.contentHTML.map(content =>
                            <CardText key={content.contentId}>
                                <Interweave content={content.text} />
                                {addGist(content.gistId)}
                            </CardText>
                         )}
                    </CardBody>
                </Card>
            </div>
        );
    }
}
