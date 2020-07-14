import React from 'react';
import './TodoListItem.css';

const Item = ({ id, label, important = true }) => {
  const importantClass = important ? 'important' : '';

  return <li className={`list-group-item todo-list-item ${importantClass}`} key={id} >
    <span className="todo-list-item-label" >{ label }</span>
    <span className="todo-list-item-buttons">
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
