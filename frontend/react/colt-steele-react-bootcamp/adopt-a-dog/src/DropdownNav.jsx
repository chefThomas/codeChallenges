import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./DropdownNav.css";

export default class DropdownNav extends Component {
  handleCloseDropdown = e => {
    if (window.innerWidth > 700) {
      this.props.closeDropdown();
    }

    // this.props.closeDropdown()
    // if (window.innerWidth >= "700px") {
    //   console.log("in handleclose");
    // }
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleCloseDropdown);
  }

  handleClick = e => {
    this.props.closeDropdown();
  };

  renderDogLinks = () => {
    return this.props.dogs.map(dog => {
      return (
        <NavLink
          exact
          className="DropdownLink"
          activeClassName="DropdownLink-active"
          to={`/dogs/${dog.name}`}
        >
          {dog.name}
        </NavLink>
      );
    });
  };
  render() {
    return (
      <div className={this.props.class}>
        <i
          onClick={this.handleClick}
          className="DropdownNav-close fas fa-times"
        />
        <NavLink
          exact
          className="DropdownLink"
          activeClassName="DropdownLink-active"
          to="/dogs"
        >
          Home
        </NavLink>
        {this.renderDogLinks()}
      </div>
    );
  }
}
