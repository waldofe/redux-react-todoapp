import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import FooterWithAction from '../containers/FooterWithAction'

const App = () => (
  <div>
		<section className="todoapp">
      <VisibleTodoList />
      <FooterWithAction />
    </section>
  </div>
)

export default App