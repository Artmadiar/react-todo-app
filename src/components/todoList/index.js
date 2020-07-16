import React from 'react';

import Item from '../todoListItem';
import './styles.css';

const TodoList = ({ list = [], deleteTodo, updateTodo, search, status }) => {  
  return <ul className="list-group to-do-list" >
    {
      list.map((el, i) => {
        if (search && !el.label.includes(search)) {
          return null;
        }

        if (status !== null && el.done !== status) {
          return null;
        }

        return <Item key={el.id} {...el} deleteTodo={deleteTodo} updateTodo={updateTodo} />;
      })
    }
  </ul>
};

export default TodoList;
