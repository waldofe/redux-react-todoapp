const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, { completed: !todo.completed })
        }

        return todo;
      });
    case 'REMOVE_TODO':
      return state
        .slice(0, action.index)
        .concat(state.slice(action.index + 1))
    default:
      return state;
  }
}

export default todos;