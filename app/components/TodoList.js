import React from 'react';
import Todo from './todo';
import { addTodo, clearCompletedTodos } from '../actions';
import { PropTypes } from 'react'

const TodoList = ({ todos, onTodoClick, onTodoDestroy, onKeyPress }) => {
	const renderTodos = () => {
		return todos.map((todo) =>
			<Todo
				onToggle={() => onTodoClick(todo.id)}
				onDestroy={() => onTodoDestroy(todo.id)}
				completed={todo.completed}
				text={todo.text}>
			</Todo>
		);
	}

	const renderMain = () => {
		if (todos.length > 0) {
			return (
				<div>
					<section className="main">
						<input className="toggle-all" type="checkbox" />
						<label htmlFor="toggle-all">Mark all as complete</label>
						<ul className="todo-list">
							{renderTodos()}
						</ul>
					</section>
				</div>
			)
		}
	}

  return (
		<div>
			<header className="header">
				<h1>todos</h1>
				<input onKeyPress={(event) => onKeyPress(event)} className="new-todo" placeholder="What needs to be done?" />
			</header>

			{renderMain()}
		</div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired
}

export default TodoList;