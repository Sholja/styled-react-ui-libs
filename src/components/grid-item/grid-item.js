import React from 'react';
import styled from '@emotion/styled';
import {
  space,
  layout,
  color,
  grid,
  background,
  compose,
  position,
  flexbox,
  border,
} from 'styled-system';

const StyledGridItem = styled('div')(
  {
    boxSizing: 'border-box',
    alignSelf: 'start',
  },
  compose(space, layout, color, grid, background, position, flexbox, border),
);

const GridItem = ({ children, ...rest }) => <StyledGridItem {...rest}>{children}</StyledGridItem>;

export default GridItem;
