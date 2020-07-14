import React from 'react';

import TodoList from '../todoList';
import Header from '../header';
import SearchPanel from '../searchPanel';

const list = [{
  id: 1,
  label: 'learn react',
  important: false,
}, {
  id: 2,
  label: 'learn flexbox',
  important: true,
}];


const App = () => (
  <div>
    <Header />
    <SearchPanel />
    <TodoList list={list} />
  </div>
);

export default App;
