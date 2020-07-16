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
    search: '',
    status: null,
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

  searchTodo = (search) => {
    this.setState({ search });
  }

  filterTodo = (status) => {
    this.setState({ status });
  }

  updateTodo = ({ id, label, done, important }) => {
    this.setState((state) => {
      const { list } = state;

      return {
        list: list.reduce((arr, el) => {
          if (el.id !== id) {
            arr.push(el);
            return arr;
          }
          arr.push({
            id, label, done, important,
          });
          return arr;
        }, []),
      };
    })
  }

  render() {
    return (
      <div>
        <Header list={this.state.list} />
        <SearchPanel searchTodo={this.searchTodo} filterTodo={this.filterTodo} status={this.state.status} />
        <TodoList
          list={this.state.list}
          search={this.state.search}
          status={this.state.status}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
        <AddPanel addTodo={this.addTodo} />
      </div>
    );
  }
}
