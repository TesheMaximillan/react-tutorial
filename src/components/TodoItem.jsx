/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

class TodoItem extends PureComponent {
  render() {
    const { todo, handleChange, delTodo } = this.props;
    const { id, title, completed } = todo;
    return (
      <li>
        <input type="checkbox" checked={completed} onChange={() => handleChange(id)} />
        {title}
        <button type="button" onClick={() => delTodo(id)}> Delete </button>
      </li>
    );
  }
}

export default TodoItem;
