import React, { Component } from 'react';

import TodoList from '../todoList';
import Header from '../header';
import SearchPanel from '../searchPanel';
import AddPanel from '../addPanel';


export default class App extends Component {
  state = {
    list: [{
      id: 1,
      label: 'learn react',
      important: false,
      done: false,
    }, {
      id: 2,
      label: 'learn flexbox',
      important: true,
      done: false,
    }],
  };

  deleteTodo = (id) => {
    this.setState((state) => {
      if (!state.list.find((el) => el.id === id)) {
        throw new Error('Todo not found');
      }
      return {
        list: state.list.filter(el => el.id !== id),
      }
    });
  }

  addTodo = ({ label }) => {
    this.setState((state) => ({
      list: [...this.state.list, {
        id: state.list.length + 1,
        label,
        important: false,
        done: false,
      }],
    }));
  }

  filterList = (search) => {
    this.setState((state) => {
      return {
        list: state.list.filter((e) => e.label.includes(search)),
      }
    });
  }

  render() {
    return (
      <div>
        <Header list={this.state.list} />
        <SearchPanel filterList={this.filterList} />
        <TodoList
          list={this.state.list}
          deleteTodo={this.deleteTodo}
        />
        <AddPanel addTodo={this.addTodo} />
      </div>
    );
  }
}
