import React, { Component } from 'react';
import { Jumbotron, Button, Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export class Header extends Component {
    displayName = Header.name

    render() {
        return (
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }
}
