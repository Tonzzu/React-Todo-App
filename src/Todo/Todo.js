import React, {Component} from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    return (
      <div className="box todo">
        <h3>Go To Buy Groceries</h3>
        <button className="button is-danger">DELETE</button>

      </div>

    )
  }
}

export default Todo;