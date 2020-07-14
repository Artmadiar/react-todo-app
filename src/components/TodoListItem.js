import React from 'react';
import './TodoListItem.css';

const Item = ({ id, label, important = false }) => {
  console.log({id, label, important });
  const liStyle = {
    color: important ? 'tomato' : 'black',
  };

  return <li className="list-group-item todo-list-item" key={id} >
    <span style={liStyle} className="todo-list-item-label" >{ label }</span>
    <span>
      <button type="button" className="btn btn-outline-success btn-sm">
        <i className="fa fa-exclamation" />
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  </li>
};

export default Item;
