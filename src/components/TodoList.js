import React, { Fragment } from 'react';
import Footer from './Footer';


const TodoList = ({ todosCount, todos, actions }) => {
  console.log(todosCount, todos, actions);
  return (
    <Fragment>
      {
        !todosCount &&
        <div className="todoList__empty">
          <h3 className="todoList__empty-title">
            Сомневаюсь, что у вас что то не запланированно
          </h3>
          <div className="todoList__empty-text">
            Иди РР учи, пидорас!
          </div>
        </div>
      }
      {
        !!todosCount &&
        <ul className="todoList">
          {todos.map(todo =>
            <li
              className="todoList__elem"
              key={todo.id}
            >
              <input
                className="todoList__checkbox"
                type="checkbox"
                name={todo.id}
                onClick={() => actions.toggleTodo(todo.id)}
                checked={ todo.completed }
                readOnly
              />
              <label 
                className="todoList__label"
                htmlFor={todo.id}
                data-content={todo.text}
              >
                {todo.text}
              </label>
              <button 
                className="todoList__button"
                onClick={() => actions.deleteTodo(todo.id)}
              >
                Х
              </button>
            </li>
          )}
        </ul>
      }
      {
        !!todosCount &&
        <Footer />
      }
    </Fragment>  
  )
}


export default TodoList;