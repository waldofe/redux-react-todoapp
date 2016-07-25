import React from 'react';
import { toggleTodo, removeTodo } from '../actions';

const Todo = ({store, todo}) => {
	const completedClassName = () => {
		if (todo.completed) {
			return "completed"
		}
	}

	const dispatchToggleTodo = () => {
		store.dispatch(toggleTodo(todo.id));
	}

	const dispatchRemoveTodo = () => {
		store.dispatch(removeTodo(todo.id));
	}

  return (
		<li className={completedClassName()}>
			<div className="view">
				<input className="toggle" type="checkbox" onClick={dispatchToggleTodo} checked={todo.completed} />
				<label>{todo.text}</label>
				<button className="destroy" onClick={dispatchRemoveTodo}></button>
			</div>
			<input className="edit" value="Create a TodoMVC template" />
		</li>
  )
}

export default Todo;