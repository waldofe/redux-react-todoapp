export const addTodo = (text, id) => {
  return {
    type: 'ADD_TODO',
    text,
    id
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const clearCompletedTodos = (completedTodoIds) => {
  return {
    type: 'CLEAR_COMPLETED_TODOS',
    completedTodoIds
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
