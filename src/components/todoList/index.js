import React from 'react';

import Item from '../todoListItem';
import './styles.css';

const TodoList = ({ list = [], deleteTodo }) => {  
  return <ul className="list-group to-do-list" >
    {
      list.map((el, i) => <Item key={el.id} {...el} deleteTodo={deleteTodo} />)
    }
  </ul>
};

export default TodoList;
