import React, { Component } from "react";
import "react-bulma-components/full";
import "./TodoForm.css";

class TodoForm extends Component {

  state = {
    todos: []
  }

  addTodo() {
    // const todo = 



    return (
      <div className="box todo">
        <h3>Go To Buy Groceries</h3>
        <button className="button is-danger">DELETE</button>

      </div>

    )

  }


  render() {
    return (
      <div className="box form-box">
        <label className="label">Add New Todo</label>
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" name="todo" value={this.state.todos} placeholder="Type here" />
          </div>
          <div className="control">
            <button 
            onClick={this.addTodo}
            className="button is-primary">ADD</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
