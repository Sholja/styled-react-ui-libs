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
import { useTheme, withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

import Box from '../box/box';

const StyledTable = styled('table')(
  {
    width: '100%',
    boxShadow: '0 1px 0 0 #eaedf3',
  },
  props => ({
    fontWeight: themeGet('fontWeights.normal')(props),
    lineHeight: themeGet('lineHeights.normal')(props),
  }),
  compose(typography, space, color, layout, border, background, shadow),
);

const Table = ({ children, wrapperStyle = {}, stripped, ...rest }) => {
  const theme = useTheme();

  return (
    <Box display="block" width="100%" overflowX="auto" style={wrapperStyle}>
      <StyledTable
        {...rest}
        border={stripped ? 'none' : `${theme.borders[1]} ${theme.colors.greys[1300]}`}
      >
        {children}
      </StyledTable>
    </Box>
  );
};

Table.propTypes = {
  wrapperStyle: PropTypes.object,
  stripped: PropTypes.bool,
};

export default withTheme(Table);
