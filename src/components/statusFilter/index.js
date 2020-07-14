import React, { Component } from 'react';
import './styles.css';

export default class StatusFilter extends Component {
  render() {
    return (
      <div className="input-group-append" id="button-addon4">
      <button className="btn btn-outline-primary" type="button">All</button>
      <button className="btn btn-outline-secondary" type="button">Active</button>
      <button className="btn btn-outline-secondary" type="button">Done</button>
    </div>
    );
  }
}
