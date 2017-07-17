import React from 'react';
import TextField from 'material-ui/TextField';

const FilterField = props =>
  <div>
    <TextField hintText="Filter" onChange={props.onChange} />
  </div>;

export default FilterField;
