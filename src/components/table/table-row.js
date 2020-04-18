import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';

import DefaultTheme from '../../theme/theme';

const StyledTableRow = styled('tr')(
  {
    fontWeight: DefaultTheme.fontWeights.normal,
    lineHeight: DefaultTheme.lineHeights.normal,
    fontFamily: DefaultTheme.fonts.sans,
  },
  compose(typography, space, color, layout, border, background),
);

const TableRow = ({ children, ...rest }) => <StyledTableRow {...rest}>{children}</StyledTableRow>;

export default TableRow;
