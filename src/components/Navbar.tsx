import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div style={{ display: 'flex' }}>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}
