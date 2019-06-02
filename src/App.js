import React, {Component} from 'react';
import './App.css';
import TodoForm from './TodoForm/TodoForm'
import Todo from './Todo/Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm></TodoForm>
        <Todo></Todo>
        <Todo></Todo>
        <Todo></Todo>
      </div>
    )
  }
}

export default App;
