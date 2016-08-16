import React, {Component} from 'react';
import {Navbar, Header, Brand, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap/lib';


class Navigation extends Component {
  render() {

    // const showGrid = {
    //  backgroundColor: "#DF446D" ,
    //   border: 1,
    //   borderStyle: "solid",
    //   borderColor: "gray"
    // };

    var navbarStyle = {
      marginBottom: 100,
    };

    return (
      <Navbar className="navbar navbar-inverse navbar-fixed-top" fluid={true} style={navbarStyle}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>

    );
  }
}

export default Navigation;