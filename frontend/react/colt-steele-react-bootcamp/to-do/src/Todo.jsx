import React, { Component } from "react";
import editIcon from "./edit-icon.png";
import trashIcon from "./trash-icon.png";
import "./styles/Todo.css";

export default class Todo extends Component {
  state = {
    task: ""
  };

  //
  getId = evt => evt.target.closest("[id]").getAttribute("id");

  handleCompleteTask = e => {
    const id = this.getId(e);
    this.props.done(id);
  };

  handleFormDisplay = e => {
    const id = this.getId(e);
    this.props.formToggle(id);
  };

  handleDelete = e => {
    const id = this.getId(e);
    this.props.removeTask(id);
  };

  handleEdit = e => {
    e.preventDefault();
    const id = this.getId(e);
    console.log(id);
    this.props.editTask(id, this.state.task);
  };

  handleChange = e => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <li id={this.props.id}>
        <div className={this.props.editing ? "hide" : ""}>
          <span
            onClick={this.handleCompleteTask}
            className={this.props.complete ? "done" : ""}
          >
            {this.props.name}
          </span>
          <div className="icons">
            <img
              onClick={this.handleFormDisplay}
              className="icon"
              type="image"
              src={editIcon}
              alt="edit button"
            />
            <img
              onClick={this.handleDelete}
              className="icon"
              type="image"
              src={trashIcon}
              alt="delete button"
            />
          </div>
        </div>
        <form
          onSubmit={this.handleEdit}
          className={this.props.editing ? "" : "hide"}
          action=""
        >
          <label htmlFor="editTask" />
          <input onChange={this.handleChange} type="text" />
          <input type="submit" />
        </form>
      </li>
    );
  }
}
