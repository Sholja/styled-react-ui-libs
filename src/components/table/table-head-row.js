import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout, border, background } from 'styled-system';
import { withTheme } from 'emotion-theming';

const StyledTableHeadRow = styled('th')(
  {
    padding: '13px 15px',
    textAlign: 'left',
  },
  props => ({
    fontWeight: props.theme.fontWeights.normal,
    lineHeight: props.theme.lineHeights.normal,
    color: props.theme.colors.greys[1000],
    fontSize: props.theme.fontSizes.xxs,
  }),
  compose(typography, space, color, layout, border, background),
);

const TableHeadRow = ({ children, ...rest }) => (
  <StyledTableHeadRow {...rest}>{children}</StyledTableHeadRow>
);

export default withTheme(TableHeadRow);
