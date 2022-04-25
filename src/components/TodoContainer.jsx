import React, { PureComponent } from 'react';
import Header from './Header';
import TodoList from './TodoList';

class TodoContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  // eslint-disable-next-line class-methods-use-this
  handleChange = (id) => {
    console.log('Clicked', id);
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <TodoList todos={todos} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default TodoContainer;
