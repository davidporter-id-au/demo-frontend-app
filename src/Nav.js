import React, { Component } from 'react';

import {
  NavItem,
  NavDropdown,
  Nav,
  Navbar,
  MenuItem,
} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
        <Navbar inverse onSelect={this.navSelect}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#/">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#/vpc">
              VPC
            </NavItem>
            <NavItem eventKey={2} href="#/ecs">
              ECS
            </NavItem>
            <NavItem href="#/builds">
              Builds
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
    )
  }
}

export default Home;
