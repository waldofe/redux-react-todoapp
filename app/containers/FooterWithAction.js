import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { clearCompletedTodos } from '../actions'

const mapStateToProps = (state) => {
  return {
    completedTodos: state.todos.filter(t => t.completed),
    todosLeftCount: state.todos.filter(t => !t.completed).length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearComplete: (completedTodos) => {
      dispatch(clearCompletedTodos(completedTodos.map((todo) => todo.id)));
    }
  }
}

const FooterWithAction = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterWithAction