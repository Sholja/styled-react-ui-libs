import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';

import DefaultTheme from '../../theme/theme';

const StyledTableBodyRow = styled('td')(
  {
    fontWeight: DefaultTheme.fontWeights.normal,
    lineHeight: DefaultTheme.lineHeights.normal,
    fontFamily: DefaultTheme.fonts.sans,
    padding: '10px 15px',
    color: DefaultTheme.colors.greys[1100],
    fontSize: DefaultTheme.fontSizes.xs,
    textAlign: 'left',
    borderTop: `${DefaultTheme.borders[1]} ${DefaultTheme.colors.greys[1300]}`,
  },
  compose(typography, space, color, layout, border, background),
);

const TableBodyRow = ({ children, ...rest }) => (
  <StyledTableBodyRow {...rest}>{children}</StyledTableBodyRow>
);

export default TableBodyRow;
