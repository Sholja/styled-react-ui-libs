import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';

import DefaultTheme from '../../theme/theme';

const StyledTableBody = styled('tbody')(
  {
    fontWeight: DefaultTheme.fontWeights.normal,
    lineHeight: DefaultTheme.lineHeights.normal,
    fontFamily: DefaultTheme.fonts.sans,
  },
  compose(typography, space, color, layout, border, background),
);

const TableBody = ({ children, ...rest }) => (
  <StyledTableBody {...rest}>{children}</StyledTableBody>
);

export default TableBody;
