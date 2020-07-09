import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class CreateTaskForm extends Component {
  state = {
    title: "",
    description: "",
  };

  handleFormChange = (evt) => {
    evt.target.name === "title"
      ? this.setState({ title: evt.target.value })
      : this.setState({ description: evt.target.value });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();

    await this.props.store.addTask(this.state);

    this.setState({ title: "", description: "" });
    console.log(evt);
  };

  render() {
    return (
      <form className="createTaskForm" onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          value={this.title}
          name="title"
          placeholder="Enter task title"
          onChange={this.handleFormChange}
        />
        <input
          className="input"
          type="text"
          value={this.description}
          name="description"
          placeholder="Enter task description"
          onChange={this.handleFormChange}
        />
        <button className="addTaskBtn" type="submit">
          Add task
        </button>
      </form>
    );
  }
}

export default CreateTaskForm;
