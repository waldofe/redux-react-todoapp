require("./todoApp.css");

import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import TodoList from './components/TodoList';
import { addTodo, toggleTodo, removeTodo } from './actions'

const render = () => {
  ReactDOM.render(
    <TodoList
      previousTodoId={store.getState().todos.length}
      store={store}
      todos={store.getState().todos}
    />,
    document.getElementById('todo-app')
  )
}

store.subscribe(() => render());
render()

store.dispatch(addTodo('Buy a unicorn', 0));
