import React from 'react';
import { toggleTodo, removeTodo } from '../actions';
import { PropTypes } from 'react'

const Todo = ({ onToggle, onDestroy, completed, text }) => {
	const completedClassName = () => {
		if (completed) {
			return "completed"
		}
	}

  return (
		<li className={completedClassName()}>
			<div className="view">
				<input onClick={onToggle} checked={completed} className="toggle" type="checkbox" />
				<label>{text}</label>
				<button onClick={onDestroy} className="destroy"></button>
			</div>
		</li>
  )
}

Todo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo