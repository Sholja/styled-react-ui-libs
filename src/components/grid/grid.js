import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  space,
  layout,
  color,
  grid,
  background,
  compose,
  position,
  shadow,
  border,
  flexbox,
} from 'styled-system';
import { withTheme } from 'emotion-theming';

const StyledGrid = styled('div')(
  {
    boxSizing: 'border-box',
    display: 'grid',
    alignContent: 'space-evenly',
  },
  compose(space, layout, color, grid, background, position, shadow, border, flexbox),
);

StyledGrid.defaultProps = {
  gridGap: ['sm', 'md', 'lg'],
};

const Grid = ({ children, ...rest }) => <StyledGrid {...rest}>{children}</StyledGrid>;

Grid.propTypes = {
  className: PropTypes.string,
};

export default withTheme(Grid);
