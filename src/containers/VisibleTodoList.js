import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import TodoList from '../components/TodoList';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)