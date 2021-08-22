import React from 'react';
import TodoTextInput from './TodoTextInput';


const Header = ({ addTodo }) => {
  console.log(addTodo);
  return (
    <header className="header">
      <h1 className="header__title">todos</h1>
      <TodoTextInput
        onSave={(text) => {
          if (text.length !== 0) {
            addTodo(text)
          }
        }}
        placeholder='Add a task...'
      />
    </header>
  )
}

export default Header