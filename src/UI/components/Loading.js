import React from 'react';

export default ({ isLoading }) =>
  <div>
    {isLoading ? null : <div className="loading">Loading&#8230;</div>}
  </div>;
