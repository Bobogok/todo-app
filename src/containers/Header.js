import { connect } from 'react-redux';
import Header from '../components/Header';
import { addTodo } from '../actions';

console.log(addTodo);
export default connect(null, { addTodo })(Header);