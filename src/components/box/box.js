import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  space,
  layout,
  color,
  flexbox,
  background,
  compose,
  position,
  border,
  typography,
  shadow,
} from 'styled-system';

const StyledBox = styled('div')(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const Box = ({ children, ...rest }) => <StyledBox {...rest}>{children}</StyledBox>;

Box.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default Box;
