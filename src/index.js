import React, { Component } from "react";
import ReactDOM from "react-dom";
import DevTools from "mobx-react-devtools";
import { observer } from "mobx-react";
import Counter from "./components/Counter";
import TasksList from "./components/TasksList";
import CreateTaskForm from "./components/CreateTaskForm";
import store from "./store";
import "./index.css";

@observer
class App extends Component {
  setName = () => {
    const name = prompt("Enter your name");
    if (!name) return;
    this.props.store.setName(name);
  };

  render() {
    const { store } = this.props;

    return (
      <>
        <DevTools />
        <header className="header">
          <h1 className="logo">TODOshka</h1>
          <p>
            <span className="userName">{store.name}</span>
            {"  "}
            <span className="userAge">{store.counter}</span>
          </p>
          <button className="setNameBtn" onClick={this.setName}>
            Set name
          </button>
        </header>
        <Counter store={store} />
        <CreateTaskForm store={store} />
        <TasksList store={store} />
      </>
    );
  }
}

ReactDOM.render(<App store={store} />, document.getElementById("root"));
