import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Header } from './Header';
import { About } from './subcomponents/About';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
        <Grid>
            <NavMenu />
            <About />
            {this.props.children}
        </Grid>
    );
  }
}
