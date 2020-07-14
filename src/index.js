import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';

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

ReactDOM.render(< App />, document.getElementById('root'));
