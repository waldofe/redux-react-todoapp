import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import store from './store';
import App from './components/App';
import { addTodo, toggleTodo, removeTodo } from './actions'

// Avoiding a DB usage early-on.
window.globalTodoId = 0;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('todo-app')
)
