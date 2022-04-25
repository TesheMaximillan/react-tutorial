/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import styles from './TodoItem.module.scss';

class TodoItem extends PureComponent {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { todo, handleChange, delTodo } = this.props;
    const { id, title, completed } = todo;
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChange(id)}
        />
        <button type="button" onClick={() => delTodo(id)}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
