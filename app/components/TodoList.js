import React from 'react';
import Todo from './todo';
import { addTodo } from '../actions';

const TodoList = ({previousTodoId, store, todos}) => {
	const renderTodos = () => {
		return todos.map((todo) => <Todo store={store} todo={todo} />);
	}

	const dispatchAddTodo = (event) => {
		if (event.key === 'Enter') {
			store.dispatch(addTodo(event.target.value, previousTodoId++));
			event.target.value = '';
		}
	}

  return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input onKeyPress={dispatchAddTodo} className="new-todo" placeholder="What needs to be done?"></input>
			</header>

			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{renderTodos()}
				</ul>
			</section>

			<footer className="footer">
				<span className="todo-count"><strong>0</strong> item left</span>
				<button className="clear-completed">Clear completed</button>
			</footer>
		</section>
  )
}

export default TodoList;