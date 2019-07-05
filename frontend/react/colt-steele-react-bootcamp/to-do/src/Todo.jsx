import React, { Component } from "react";
import editIcon from "./edit-icon.png";
import trashIcon from "./trash-icon.png";
import "./css/components/Todo.css";

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
      <li className="task-wrapper" id={this.props.id}>
        <div className={this.props.editing ? "hide" : "task-content"}>
          <div
            onClick={this.handleCompleteTask}
            className={`task-text ${this.props.complete ? "done" : ""} ${
              this.props.editing ? "hide" : ""
            }`}
          >
            {this.props.name}
          </div>
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
          className={`edit-form ${this.props.editing ? "" : "hide"}`}
          action=""
        >
          <label htmlFor="editTask" />
          <input
            onChange={this.handleChange}
            type="text"
            className="edit-form-input"
            required
          />
          <input className="edit-button" type="submit" />
        </form>
      </li>
    );
  }
}
