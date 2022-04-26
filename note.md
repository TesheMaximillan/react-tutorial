import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

function TodoContainer() {
  const getInitialTodos = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    return savedTodos || [];
  };

  const { todos, setTodos } = useState(getInitialTodos());

  // useEffect(() => {
  //   const loadedTodos = JSON.parse(localStorage.getItem('todos'));
  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevSate) => prevSate.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos({
      todos: [...todos, newTodo],
    });
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodoList
          todos={todos}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
}

export default TodoContainer;
