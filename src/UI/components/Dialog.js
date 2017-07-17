import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

const Div = styled.div`
  display: inline-block;
  margin-left: 3px;
`;

export default class DialogAlert extends React.Component {
  state = {
    open: this.props.open,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose}
        onClick={this.props.delete}
      />,
    ];

    return (
      <Div>
        <RaisedButton
          label="Delete"
          onTouchTap={this.handleOpen}
          secondary={true}
        />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Delete Book?
        </Dialog>
      </Div>
    );
  }
}
