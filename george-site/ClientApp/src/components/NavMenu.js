import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class NavMenu extends Component {
  displayName = NavMenu.name
    render() {
        return (
            <div>
                <Navbar color="light" light expand="xs" className="center">
                    <Collapse navbar>
                        <Nav navbar className="center-nav">
                            <LinkContainer to={'/jobs'} exact>
                                <NavItem>
                                    <NavLink href="javascript;"><FontAwesomeIcon icon="user-tie" /> Jobs</NavLink>
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/education'} exact>
                                <NavItem>
                                    <NavLink href="javascript;"><FontAwesomeIcon icon="university" /> Education</NavLink>
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/projects'} exact>
                                <NavItem>
                                    <NavLink href="javascript;"><FontAwesomeIcon icon="briefcase" /> Projects</NavLink>
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
