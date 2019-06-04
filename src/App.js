import React, { Component } from "react";
import "./App.css";
import TodoForm from "./TodoForm/TodoForm";
import Todo from "./Todo/Todo";

class App extends Component {
  state = {
    tasks: []
  };

  removeTask = index => {
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.filter((task, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <p style={{ color: "#aaa" }}>
          Made with <span style={{ color: "red" }}>&hearts;</span> and React
        </p>
        <TodoForm handleSubmit={this.handleSubmit} />
        <Todo taskList={tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
