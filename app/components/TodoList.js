import React from 'react';
import Todo from './todo';
import { addTodo, clearCompletedTodos } from '../actions';

const TodoList = ({store, todos}) => {
	const renderTodos = () => {
		return todos.map((todo) => <Todo store={store} todo={todo} />);
	}

	const completedTodos = () => {
		return todos.filter((todo) => todo.completed === true)
	}

	const countTodosLeft = () => {
		return todos.filter((todo) => todo.completed === false).length;
	}

	const clearCompletedButton = () => {
		if (completedTodos().length > 0) {
			return (
				<button onClick={dispatchClearCompleted} className="clear-completed">Clear completed</button>
			)
		}
	}

	const dispatchAddTodo = (event) => {
		if (event.key === 'Enter' && event.target.value !== '') {
			store.dispatch(addTodo(event.target.value, globalTodoId++));
			event.target.value = '';
		}
	}

	const dispatchClearCompleted = () => {
		store.dispatch(
			clearCompletedTodos(completedTodos().map((item) => item.id))
		)
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
				<span className="todo-count"><strong>{countTodosLeft()}</strong> item left</span>
				{clearCompletedButton()}
			</footer>
		</section>
  )
}

export default TodoList;