import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state) => {
  return {
    todosLeftCount: state.todos.filter(t => !t.completed).length
  }
}

const FooterWithAction = connect(
  mapStateToProps
)(Footer)

export default FooterWithAction