import { nanoid } from 'nanoid';

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nanoid(),
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const completeAllTodos = () => ({
  type: 'COMPLETE_ALL_TODOS'
});

export const deleteTodo = id => ({ 
  type: 'DELETE_TODO', 
  id 
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}