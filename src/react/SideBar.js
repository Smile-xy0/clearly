
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './SideBar.css';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="nav-brand">
          <img
            width="100"
            height="100"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=brand&w=100&h=100"
            alt="clearly logo"
          />
        </div>
        <div className="nav-links">
          <Nav vertical>
            <NavItem>
              <NavLink href="#">All Videos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Unwatched</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default SideBar;
