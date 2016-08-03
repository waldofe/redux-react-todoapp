const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { completed: !todo.completed })
        }

        return todo;
      });
    case 'CLEAR_COMPLETED_TODOS':
      return state.filter((todo) => todo.completed == false);
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id)
    default:
      return state;
  }
}

export default todos;