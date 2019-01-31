import React, { Component } from 'react';
import { Jumbotron, Button, Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export class Header extends Component {
    displayName = Header.name

    render() {
        return (
            <Jumbotron>
                <h1>George's Blog!</h1>
                <p>
                    Welcome to my blog, where I post about programming, gaming, sports, and other random interests.
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }
}
