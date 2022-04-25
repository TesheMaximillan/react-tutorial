/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

class TodoItem extends PureComponent {
  render() {
    const { todo, handleChange } = this.props;
    const { id, title, completed } = todo;
    return (
      <li>
        <input type="checkbox" checked={completed} onChange={handleChange(id)} />
        {title}
      </li>
    );
  }
}

export default TodoItem;
