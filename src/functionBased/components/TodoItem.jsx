/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './TodoItem.module.scss';

function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const {
    todo, handleChange, delTodo, setUpdate,
  } = props;
  const { id, title, completed } = todo;

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChange(id)}
        />
        <button type="button" onClick={() => delTodo(id)}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => setUpdate(e.target.value, id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;
