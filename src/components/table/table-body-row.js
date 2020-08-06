import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';
import { withTheme } from 'emotion-theming';

const StyledTableBodyRow = styled('td')(
  {
    padding: '10px 15px',
    textAlign: 'left',
  },
  props => ({
    fontWeight: props.theme.fontWeights.normal,
    lineHeight: props.theme.lineHeights.normal,
    color: props.theme.colors.greys[1100],
    fontSize: props.theme.fontSizes.xs,
    borderTop: `${props.theme.borders[1]} ${props.theme.colors.greys[1300]}`,
  }),
  compose(typography, space, color, layout, border, background),
);

const TableBodyRow = ({ children, ...rest }) => (
  <StyledTableBodyRow {...rest}>{children}</StyledTableBodyRow>
);

export default withTheme(TableBodyRow);
