import React, { Component } from "react";

export default class AddTodoForm extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // bring form state to parent
    this.props.addTask(this.state);
    // reset text input
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="name">Task</label>
          <br />
          <input
            id="name"
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
