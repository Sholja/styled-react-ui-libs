import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';

import DefaultTheme from '../../theme/theme';

const StyledTableHead = styled('thead')(
  {
    fontWeight: DefaultTheme.fontWeights.normal,
    lineHeight: DefaultTheme.lineHeights.normal,
    fontFamily: DefaultTheme.fonts.sans,
    width: '100%',
  },
  compose(typography, space, color, layout, border, background),
);

const TableHead = ({ children, ...rest }) => (
  <StyledTableHead {...rest}>{children}</StyledTableHead>
);

export default TableHead;
