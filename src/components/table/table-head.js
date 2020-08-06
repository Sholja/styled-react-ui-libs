import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';
import { withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

const StyledTableHead = styled('thead')(
  {
    width: '100%',
  },
  props => ({
    fontWeight: themeGet('fontWeights.normal')(props),
    lineHeight: themeGet('lineHeights.normal')(props),
  }),
  compose(typography, space, color, layout, border, background),
);

const TableHead = ({ children, ...rest }) => (
  <StyledTableHead {...rest}>{children}</StyledTableHead>
);

export default withTheme(TableHead);
