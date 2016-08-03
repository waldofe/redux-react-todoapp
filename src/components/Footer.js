import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = ({completedTodos, todosLeftCount, onClearComplete}) => (

  <footer className="footer">
    <span className="todo-count">{todosLeftCount}<strong></strong> item left</span>

    <ul className="filters">
      <li>
        <FilterLink filter="SHOW_ALL">All</FilterLink>
      </li>
      <li>
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      </li>
      <li>
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
      </li>
    </ul>

    <button onClick={() => onClearComplete(completedTodos)} className="clear-completed">Clear completed</button>
  </footer>
)

export default Footer