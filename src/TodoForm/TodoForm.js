import React from "react";
import "react-bulma-components/full";
import "./TodoForm.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: null
    };
    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;
    // event.preventDefault();
    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    // event.preventDefault();
    this.setState({ name: null });
  };

  render() {
    const { name } = this.props;

    return (
      <form className="box form-box">
        <label className="label">Add New Todo</label>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              placeholder="Type here"
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="control">
            <input
              type="button"
              value="ADD"
              className="button is-primary"
              onClick={this.submitForm}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default TodoForm;
