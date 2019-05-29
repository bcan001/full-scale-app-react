/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types'; //impt
import ToDoListItem from './todoListItem';

const todoList = ({ todos, ...props }) => {
  return (
    <div>
      {todos.map(todo => (
        <ToDoListItem key={todo.id} todo={todo} {...props} />
      ))}
    </div>
  );
};

todoList.propTypes = {
  todos: PropTypes.array.isRequired, // ptar
};

export default todoList;
