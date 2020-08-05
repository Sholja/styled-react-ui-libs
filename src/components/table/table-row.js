import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';

const StyledTableRow = styled('tr')(
  {},
  props => ({
    fontWeight: props.theme.fontWeights.normal,
    lineHeight: props.theme.lineHeights.normal,
  }),
  compose(typography, space, color, layout, border, background),
);

const TableRow = ({ children, ...rest }) => <StyledTableRow {...rest}>{children}</StyledTableRow>;

export default TableRow;
