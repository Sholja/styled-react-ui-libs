import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';
import { withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

const StyledTableRow = styled('tr')(
  {},
  props => ({
    fontWeight: themeGet('fontWeights.normal')(props),
    lineHeight: themeGet('lineHeights.normal')(props),
  }),
  compose(typography, space, color, layout, border, background),
);

const TableRow = ({ children, ...rest }) => <StyledTableRow {...rest}>{children}</StyledTableRow>;

export default withTheme(TableRow);
