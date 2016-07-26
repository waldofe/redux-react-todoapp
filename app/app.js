import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import TodoList from './components/TodoList';
import { addTodo, toggleTodo, removeTodo } from './actions'

// Avoiding a DB usage early-on.
window.globalTodoId = 0;

const render = () => {
  ReactDOM.render(
    <TodoList
      store={store}
      todos={store.getState().todos}
    />,
    document.getElementById('todo-app')
  )
}

store.subscribe(() => render());
render()
