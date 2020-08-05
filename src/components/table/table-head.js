import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';

const StyledTableHead = styled('thead')(
  {
    width: '100%',
  },
  props => ({
    fontWeight: props.theme.fontWeights.normal,
    lineHeight: props.theme.lineHeights.normal,
  }),
  compose(typography, space, color, layout, border, background),
);

const TableHead = ({ children, ...rest }) => (
  <StyledTableHead {...rest}>{children}</StyledTableHead>
);

export default TableHead;
