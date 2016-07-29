import Immutable from 'immutable';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const initialState = Immutable.Map({
  visibilityFilter: 'SHOW_ALL', todos: []
});

function mainReducer(state = initialState, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

export default mainReducer;