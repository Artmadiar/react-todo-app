import React from 'react';
import './styles.css';
import StatusFilter from '../statusFilter';

const SearchPanel = () => {
  return (
    <div className="input-group search-panel">
      <input type="text" className="form-control" placeholder="find your task here" />
      <StatusFilter></StatusFilter>
    </div>
  );
};

export default SearchPanel;
