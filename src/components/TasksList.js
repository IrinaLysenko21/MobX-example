import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TasksList extends Component {
  render() {
    const { tasks } = this.props.store;

    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.title}</p>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default TasksList;
