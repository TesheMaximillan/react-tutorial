/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
  render() {
    const { todos, handleChange } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChange={handleChange} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
