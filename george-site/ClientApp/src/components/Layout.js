import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Header } from './Header';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
        <Grid>
            <NavMenu />
            {this.props.children}
        </Grid>
    );
  }
}
