import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/dogs">Home</NavLink>
        {this.props.routes.dogs.map(dog => {
          return <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>;
        })}
      </div>
    );
  }
}

export default withRouter(Navbar);
