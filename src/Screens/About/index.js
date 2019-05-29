/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class index extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  state = {};

  render() {
    return (
      <div>
        <h1>About Page</h1>
      </div>
    );
  }
}
