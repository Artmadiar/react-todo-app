import React from 'react';

import Item from '../todoListItem';
import './styles.css';

const TodoList = ({ list = [] }) => {  
  return <ul className="list-group to-do-list" >
    {
      list.map((el, i) => <Item key={el.id} {...el} />)
    }
  </ul>
};

export default TodoList;
