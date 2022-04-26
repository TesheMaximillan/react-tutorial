/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function InputTodo(props) {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const { addTodoItem } = props;
  const { title } = inputText;

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setInputText({
        title: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit" type="submit">Submit</button>
    </form>
  );
}

export default InputTodo;
