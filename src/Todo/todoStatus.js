/* eslint-disable */

import React from 'react';

const todoStatus = () => {
  return (
    <>
      <button style={{ flex: 1, padding: 10 }} type="button">
        All
      </button>
      <button style={{ flex: 1, padding: 10 }} type="button">
        Pending
      </button>
      <button style={{ flex: 1, padding: 10 }} type="button">
        Completed
      </button>
    </>
  );
};

export default todoStatus;
