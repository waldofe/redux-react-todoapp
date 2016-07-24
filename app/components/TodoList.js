import React from 'react';

const TodoList = () => {
  return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?"></input>
			</header>

			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					<li className="completed">
						<div className="view">
							<input className="toggle" type="checkbox" />
							<label>Taste JavaScript</label>
							<button className="destroy"></button>
						</div>
						<input className="edit" value="Create a TodoMVC template" />
					</li>
					<li>
						<div className="view">
							<input className="toggle" type="checkbox" />
							<label>Buy a unicorn</label>
							<button className="destroy"></button>
						</div>
						<input className="edit" value="Rule the web" />
					</li>
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