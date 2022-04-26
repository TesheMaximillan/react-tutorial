/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

class InputTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoItem } = this.props;

    if (title.trim()) {
      addTodoItem(title);
      this.setState({
        title: '',
      });
    } else {
      this.setState({
        title: '',
      });
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={title}
          onChange={this.onChange}
          className="input-text"
        />
        <button type="submit" className="input-submit">
          Submit
        </button>
      </form>
    );
  }
}

export default InputTodo;
