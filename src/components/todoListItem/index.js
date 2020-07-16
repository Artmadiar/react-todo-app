import React, { Component } from 'react';
import './styles.css';

export default class TodoListItem extends Component {
  onLabelClick = (el) => {
    const { id, label, done, important, updateTodo } = this.props;
    updateTodo({
      id, label, important,
      done: !done,
    });
  }

  changeImportance = (el) => {
    const { id, label, done, important, updateTodo } = this.props;
    updateTodo({
      id, label, done,
      important: !important,
    });
  }

  render() {
    const { id, label, done, important, deleteTodo } = this.props;

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
