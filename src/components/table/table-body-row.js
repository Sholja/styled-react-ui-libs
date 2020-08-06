import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';
import { withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

const StyledTableBodyRow = styled('td')(
  {
    padding: '10px 15px',
    textAlign: 'left',
  },
  props => ({
    fontWeight: themeGet('fontWeights.normal')(props),
    lineHeight: themeGet('lineHeights.normal')(props),
    color: themeGet('colors.greys.1100')(props),
    fontSize: themeGet('fontSizes.xs')(props),
    borderTop: `${themeGet('borders.1')(props)} ${themeGet('colors.greys.1300')(props)}`,
  }),
  compose(typography, space, color, layout, border, background),
);

const TableBodyRow = ({ children, ...rest }) => (
  <StyledTableBodyRow {...rest}>{children}</StyledTableBodyRow>
);

export default withTheme(TableBodyRow);
