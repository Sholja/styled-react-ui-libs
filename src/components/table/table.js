import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  typography,
  space,
  color,
  compose,
  layout,
  border,
  background,
  shadow,
} from 'styled-system';

import Box from '../box/box';
import DefaultTheme from '../../theme/theme';

const StyledTable = styled('table')(
  {
    fontWeight: DefaultTheme.fontWeights.normal,
    lineHeight: DefaultTheme.lineHeights.normal,
    fontFamily: DefaultTheme.fonts.sans,
    width: '100%',
    boxShadow: '0 1px 0 0 #eaedf3',
  },
  compose(typography, space, color, layout, border, background, shadow),
);

const Table = ({ children, wrapperStyle = {}, stripped, ...rest }) => (
  <Box display="block" width="100%" overflowX="auto" style={wrapperStyle}>
    <StyledTable
      {...rest}
      border={stripped ? 'none' : `${DefaultTheme.borders[1]} ${DefaultTheme.colors.greys[1300]}`}
    >
      {children}
    </StyledTable>
  </Box>
);

Table.propTypes = {
  wrapperStyle: PropTypes.object,
  stripped: PropTypes.bool,
};

export default Table;
