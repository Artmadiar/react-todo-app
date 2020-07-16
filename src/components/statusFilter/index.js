import React, { Component } from 'react';
import './styles.css';

export default class StatusFilter extends Component {
  render() {
    const { status = null } = this.props;

    return (
      <div className="input-group-append" id="button-addon4">
      <button onClick={() => this.props.filterTodo(null)} className={`btn btn-outline-${status === null ? 'primary' : 'secondary'}`} type="button">All</button>
      <button onClick={() => this.props.filterTodo(false)} className={`btn btn-outline-${status === false ? 'primary' : 'secondary'}`} type="button">Active</button>
      <button onClick={() => this.props.filterTodo(true)} className={`btn btn-outline-${status === true ? 'primary' : 'secondary'}`} type="button">Done</button>
    </div>
    );
  }
}
