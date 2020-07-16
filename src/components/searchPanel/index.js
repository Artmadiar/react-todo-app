import React from 'react';
import './styles.css';
import StatusFilter from '../statusFilter';

const SearchPanel = ({ filterList }) => {
  return (
    <div className="input-group search-panel">
      <input type="text" onChange={(e) => filterList(e.target.value)} className="form-control" placeholder="find your task here" />
      <StatusFilter></StatusFilter>
    </div>
  );
};

export default SearchPanel;
