import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Nav, Navbar, NavItem } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export class NavMenu extends Component {
  displayName = NavMenu.name
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" className="center">
                    <Collapse navbar>
                        <Nav navbar>
                            <LinkContainer to={'/'} exact>
                                <NavItem>
                                    <NavLink href="javascript;">Home</NavLink>
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/about'} exact>
                                <NavItem>
                                    <NavLink href="javascript;">About</NavLink>
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/'} exact>
                                <NavItem>
                                    <NavLink href="javascript;">Work</NavLink>
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
  //render() {
  //  return (
  //    <Navbar inverse fixedTop fluid collapseOnSelect>
  //      <Navbar.Header>
  //        <Navbar.Brand>
  //          <Link to={'/'}>george_site</Link>
  //        </Navbar.Brand>
  //        <Navbar.Toggle />
  //      </Navbar.Header>
  //      <Navbar.Collapse>
  //        <Nav>
  //          <LinkContainer to={'/'} exact>
  //            <NavItem>
  //               Home
  //            </NavItem>
  //          </LinkContainer>
  //          <LinkContainer to={'/about'}>
  //            <NavItem>
  //              About
  //            </NavItem>
  //          </LinkContainer>
  //          <LinkContainer to={'/fetchdata'}>
  //            <NavItem>
  //               Fetch data
  //            </NavItem>
  //          </LinkContainer>
  //        </Nav>
  //      </Navbar.Collapse>
  //    </Navbar>
  //  );
  //}
}
