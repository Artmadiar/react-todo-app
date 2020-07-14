import React, { Component } from 'react';
import './styles.css';

export default class TodoListItem extends Component {
  onLabelClick = () => {
    console.log(this.props.label);
  }

  render() {
    const { id, label, important } = this.props;
    const importantClass = important ? 'important' : '';

    return <li className={`list-group-item todo-list-item ${importantClass}`} key={id} >
      <span
        className="todo-list-item-label"
        onClick={this.onLabelClick}
      >{ label }</span>
      <span className="todo-list-item-buttons">
        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    </li>
  }
}
