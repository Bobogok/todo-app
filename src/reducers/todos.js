const initialState = [
  {
    text: 'Learn js',
    completed: true,
    id: 'firstId'
  },
  {
    text: 'Learn React/Redux',
    completed: false,
    id: 'secondId'
  }
]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id,
        }
      ];
      
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );

    case 'DELETE_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      );

    case 'COMPLETE_ALL_TODOS':
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));

    default:
      return state
  }
}

export default todos
