import React, { Component } from 'react';
import './styles.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState((state) => ({
      done: !state.done,
    }));
  }

  changeImportance = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      };
    });
  }

  render() {
    const { id, label, deleteTodo } = this.props;
    const { done, important } = this.state;

    let classNames = '';
    if (important) {
      classNames = `${classNames} important`;
    }
    if (done) {
      classNames = `${classNames} done`;
    }

    return <li className={`list-group-item todo-list-item ${classNames}`} key={id} >
      <span
        className="todo-list-item-label"
        onClick={this.onLabelClick}
      >{ label }</span>
      <span className="todo-list-item-buttons">
        <button type="button" onClick={this.changeImportance} className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" onClick={() => deleteTodo(id)} className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    </li>
  }
}
