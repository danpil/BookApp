import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

const StayVisible = styled.div`
  position: absolute;
  margin-left: ${props => {
    return props.open ? `${props.width}px` : 'none';
  }};
  transition: margin .2s;
`;

const NavToggleButton = props => {
  return (
    <StayVisible {...props}>
      <FloatingActionButton onClick={props.toggle}>
        <Menu />
      </FloatingActionButton>
    </StayVisible>
  );
};

export default NavToggleButton;
