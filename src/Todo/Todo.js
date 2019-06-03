import React from "react";
import "./Todo.css";

const Todo = props => {
  const tasks = props.taskList.map((task, index) => {
    return (
      <div className="box todo" key={index}>
        <h3>{task.name}</h3>
        <button
          className="button is-danger"
          onClick={() => props.removeTask(index)}
        >
          DELETE
        </button>
      </div>
    );
  });
  return <div>{tasks}</div>;
};

export default Todo;
