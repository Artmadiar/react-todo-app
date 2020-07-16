import React from 'react';
import './styles.css';
import StatusFilter from '../statusFilter';

const SearchPanel = ({ searchTodo, filterTodo, status }) => {
  return (
    <div className="input-group search-panel">
      <input type="text" onChange={(e) => searchTodo(e.target.value)} className="form-control" placeholder="find your task here" />
      <StatusFilter filterTodo={filterTodo} status={status} ></StatusFilter>
    </div>
  );
};

export default SearchPanel;
