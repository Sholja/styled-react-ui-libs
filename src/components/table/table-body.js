import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';
import { withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

const StyledTableBody = styled('tbody')(
  {},
  props => ({
    fontWeight: themeGet('fontWeights.normal')(props),
    lineHeight: themeGet('lineHeights.normal')(props),
  }),
  compose(typography, space, color, layout, border, background),
);

const TableBody = ({ children, ...rest }) => (
  <StyledTableBody {...rest}>{children}</StyledTableBody>
);

export default withTheme(TableBody);
