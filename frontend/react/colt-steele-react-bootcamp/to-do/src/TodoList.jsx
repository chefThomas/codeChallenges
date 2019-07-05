import React, { Component } from "react";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
import shortid from "shortid";
// import "./css/components/TodoList.css";

export default class TodoList extends Component {
  state = {
    tasks: []
  };

  addTask = task => {
    this.setState(st => ({
      tasks: [
        ...this.state.tasks,
        { ...task, complete: false, id: shortid.generate(), editing: false }
      ]
    }));
  };

  removeTask = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return task.id !== id;
      })
    });
  };

  completeTask = id => {
    this.setState(st => ({
      tasks: st.tasks.map(task => {
        return task.id === id ? { ...task, complete: !task.complete } : task;
      })
    }));
  };

  editTask = (id, update) => {
    this.setState(st => ({
      tasks: st.tasks.map(task => {
        return task.id === id
          ? { ...task, editing: !task.editing, name: update }
          : task;
      })
    }));
  };

  toggleForm = id => {
    this.setState(st => ({
      tasks: st.tasks.map(task => {
        return task.id === id ? { ...task, editing: !task.editing } : task;
      })
    }));
  };

  generateTasks = () => {
    return this.state.tasks.map(task => {
      return (
        <Todo
          editTask={this.editTask}
          done={this.completeTask}
          key={task.id}
          id={task.id}
          name={task.name}
          complete={task.complete}
          removeTask={this.removeTask}
          editing={task.editing}
          formToggle={this.toggleForm}
        />
      );
    });
  };

  render() {
    return (
      <div className="TodoList">
        <h1 className="header-center">Task Force</h1>
        <AddTodoForm addTask={this.addTask} />
        <div className="tasks-wrapper">{this.generateTasks()}</div>
      </div>
    );
  }
}
