import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';

import DefaultTheme from '../../theme/theme';

const StyledTableHeadRow = styled('th')(
  {
    fontWeight: DefaultTheme.fontWeights.normal,
    lineHeight: DefaultTheme.lineHeights.normal,
    fontFamily: DefaultTheme.fonts.sans,
    padding: '13px 15px',
    color: DefaultTheme.colors.greys[1000],
    fontSize: DefaultTheme.fontSizes.xxs,
    textAlign: 'left',
  },
  compose(typography, space, color, layout, border, background),
);

const TableHeadRow = ({ children, ...rest }) => (
  <StyledTableHeadRow {...rest}>{children}</StyledTableHeadRow>
);

export default TableHeadRow;
