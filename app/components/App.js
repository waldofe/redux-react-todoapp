import React from 'react'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
		<section className="todoapp">
      <VisibleTodoList />
      <Footer />
    </section>
  </div>
)

export default App