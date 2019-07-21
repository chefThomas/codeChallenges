import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import DropdownNav from "./DropdownNav";

import "./Navbar.css";

class Navbar extends Component {
  state = {
    showNav: false
  };

  handleClick = e => {
    console.log("click burger");
  };

  toggleDropdown = e => {
    this.setState({ showNav: !this.state.showNav });
  };

  closeDropdown = e => {
    this.setState({ showNav: false });
  };

  renderNavLinks = () => {
    return this.props.routes.dogs.map(dog => {
      return (
        <NavLink
          exact
          className="Navbar-link"
          activeClassName="NavLink-active"
          to={`/dogs/${dog.name}`}
        >
          {dog.name}
        </NavLink>
      );
    });
  };

  render() {
    return (
      <div className="Navbar">
        <DropdownNav
          class={this.state.showNav ? "DropdownNav" : "Dropdown-nav-hide"}
          closeDropdown={this.closeDropdown}
          dogs={this.props.routes.dogs}
        />
        <h1 className="Navbar-header">Adopt-a-Dog</h1>
        <i
          onClick={this.toggleDropdown}
          className="Navbar-burger fas fa-bars"
        />
        <div className="Navbar-links-container">
          <NavLink
            exact
            className="Navbar-link"
            activeClassName="NavLink-active"
            to="/dogs"
          >
            Home
          </NavLink>
          {this.renderNavLinks()}
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
