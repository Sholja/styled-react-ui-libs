import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';

const StyledTableBody = styled('tbody')(
  {},
  props => ({
    fontWeight: props.theme.fontWeights.normal,
    lineHeight: props.theme.lineHeights.normal,
  }),
  compose(typography, space, color, layout, border, background),
);

const TableBody = ({ children, ...rest }) => (
  <StyledTableBody {...rest}>{children}</StyledTableBody>
);

export default TableBody;
