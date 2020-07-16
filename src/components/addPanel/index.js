import React, { Component } from 'react';
import './styles.css';

export default class AddPanel extends Component {
  state = {
    label: '',
  };

  onChange = (value) => {
    this.setState({
      label: value,
    });
  }

  addTodo = () => {
    this.props.addTodo({ label: this.state.label });
    this.setState({
      label: '',
    });
  }

  render () {
    return (
      <div className="input-group add-panel">
        <input
          type="text"
          className="form-control"
          placeholder="type your next task here"
          value={this.state.label}
          onChange={(e) => this.onChange(e.target.value)}
          onKeyUp={
            (e) => {
              if (e.keyCode === 13) {
                e.preventDefault();
                this.addTodo();
              }
            }
          }
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={ this.addTodo }
        >
          Add
        </button>
      </div>
    );
  }
};
