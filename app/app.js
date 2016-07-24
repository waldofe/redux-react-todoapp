require("./todoApp.css");

import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import TodoList from './components/TodoList';
import { addTodo, toggleTodo, removeTodo } from './actions'

ReactDOM.render(<TodoList />, document.getElementById('todo-app'));

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(removeTodo(1))

// Stop listening to state updates
unsubscribe()
