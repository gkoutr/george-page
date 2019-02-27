import React, { Component } from 'react';
import Gist from 'react-gist';
import Interweave from 'interweave';
import {
    Card, CardText, CardBody, CardHeader, Spinner
} from 'reactstrap';
import MetaTags from 'react-meta-tags'
import { LinkContainer } from 'react-router-bootstrap';
import Disqus from 'disqus-react';

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
            post: {},
            isLoading: true
        }
    }
    componentWillMount() {
        if (this.props.location.state != undefined && this.props.location.state != null && this.props.location.state != '') {
            this.setState({ post: this.props.location.state.post, isLoading: false })
        }
        else {
            debugger;
            if (this.state.post != undefined && this.state.post != null) {
                fetch('api/About/GetPostById/' + this.state.id)
                    .then(response => response.json())
                    .then(data => {
                        debugger;
                        this.setState({ post: data, isLoading: false })
                    })
            }
        }
    }

    render() {
        const disqusShortname = 'george-website';
        const disqusConfig = {
            url: 'https://www.gkoutr.com/post/' + this.state.id,
            identifier: this.state.post.id,
            title: this.state.post.title,
        };
        if (this.state.isLoading) {
            return (<div><Spinner className="image-center" style={{ width: '5rem', height: '5rem' }} />{' '}</div>);
        }
        else {
            return (
                <div>
                    <MetaTags>
                        <meta name="author" content="George Koutroumpis" />
                        <meta property="og:description" content={this.state.post.shortDescription} />
                        <meta property="og:title" content={this.state.post.title} />
                    </MetaTags>
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
                        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                    </Card>

                </div>
            );
        }
        
    }
}
