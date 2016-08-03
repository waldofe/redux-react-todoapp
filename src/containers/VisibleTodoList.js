import { connect } from 'react-redux'
import { toggleTodo, addTodo, removeTodo } from '../actions'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoDestroy: (id) => {
      dispatch(removeTodo(id))
    },
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onKeyPress: (event) => {
			if (event.key === 'Enter' && event.target.value !== '') {
				dispatch(addTodo(event.target.value, globalTodoId++));
				event.target.value = '';
			}
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList