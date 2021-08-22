import React, { Fragment } from 'react';
// import AddTodo from '../containers/AddTodo';
import Header from '../containers/Header';
import VisibleTodoList from '../containers/VisibleTodoList';


const App = () => (
  <Fragment>
    <Header />
    <VisibleTodoList />
  </Fragment>
);

export default App