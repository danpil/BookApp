import React, { Component } from 'react';
import { Drawer, Divider, MenuItem } from 'material-ui';
import { Link } from 'react-router';
import NavToggleButton from './../styled/NavDrawer';

class NavDrawer extends Component {
  state = {
    open: false,
    width: 250,
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open,
      };
    });
  };

  render() {
    return (
      <div>
        <NavToggleButton
          toggle={this.toggle}
          width={this.state.width}
          open={this.state.open}
        />
        <Drawer open={this.state.open} width={this.state.width}>
          <Divider />
          <Link to={'/'}>
            <MenuItem primaryText={'Books'} onClick={this.toggle} />
          </Link>
          <Link to={'/filter'}>
            <MenuItem primaryText={'Filter'} onClick={this.toggle} />
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
