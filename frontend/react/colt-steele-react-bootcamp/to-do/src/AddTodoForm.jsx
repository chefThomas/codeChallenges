import React, { Component } from "react";
import "./css/main.css";

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
      <div className="form-container">
        <form onSubmit={this.handleSubmit} action="">
          <label className="input-label" htmlFor="name">
            Add Task
          </label>
          <input
            className="form-input"
            id="name"
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
            required
          />
          <small className="sub-text">{`There is no try <(°.°)>`} </small>
          <br />
          <input className="button" type="submit" />
        </form>
      </div>
    );
  }
}
