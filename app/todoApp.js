import Immutable from 'immutable';
import todos from './reducers/todos';

const initialState = Immutable.Map({ todos: [] });

function todoApp(state = initialState, action) {
  return {
    todos: todos(state.todos, action)
  }
}

export default todoApp;