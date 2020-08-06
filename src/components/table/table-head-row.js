import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';
import { withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

const StyledTableHeadRow = styled('th')(
  {
    padding: '13px 15px',
    textAlign: 'left',
  },
  props => ({
    fontWeight: themeGet('fontWeights.normal')(props),
    lineHeight: themeGet('lineHeights.normal')(props),
    color: themeGet('colors.greys.1000')(props),
    fontSize: themeGet('fontSizes.xxs')(props),
  }),
  compose(typography, space, color, layout, border, background),
);

const TableHeadRow = ({ children, ...rest }) => (
  <StyledTableHeadRow {...rest}>{children}</StyledTableHeadRow>
);

export default withTheme(TableHeadRow);
