/* eslint-disable */

import React, { Component } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoStatus from './todoStatus';

export default class index extends Component {
  state = {
    todoText: '',
    todos: [],
  };

  onChange = event => {
    this.setState({ todoText: event.target.value }); //sst
  };

  addTodo = e => {
    e.preventDefault();
    const { todoText, todos } = this.state; //cs
    this.setState({
      todos: [{ id: todos.length, text: todoText, isDone: false }, ...todos],
      todoText: '',
      noticeText: '',
    }); //sst
  };

  onDelete = todo => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(x => x.id != todo.id),
    });
  };

  onComplete = todo => {
    const { todos } = this.state; //cs
    const i = todos.findIndex(x => x.id === todo.id);
    const updatedTodos = [
      ...todos.slice(0, i),
      { ...todo, isDone: !todo.isDone },
      ...todos.slice(i + 1),
    ];
    this.setState({ todos: updatedTodos });
  };

  //   onUpdate = todo => {
  //     const { todos } = this.state; //cs
  //     const i = todos.findIndex(x => x.id === todo.id);
  //     const updatedTodos = [...todos.slice(0, i), { ...todo, isDone: !todo.isDone }, ...todos.slice(i + 1)];
  //     this.setState({ todos: updatedTodos });
  //   };

  render() {
    const { todoText, todos, noticeText } = this.state;
    console.log(todos);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Todo Form</h1>
        <TodoForm value={todoText} onChange={this.onChange} addTodo={this.addTodo} />
        <div style={{ flex: 1, width: '100%' }}>
          <TodoList todos={todos} onDelete={this.onDelete} onComplete={this.onComplete} />
        </div>
        <div style={{ width: '100%', display: 'flex' }}>
          <TodoStatus />
        </div>
      </div>
    );
  }
}

// make blank todos not accepted
