import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  space,
  layout,
  color,
  flexbox,
  background,
  compose,
  position,
  shadow,
  border,
  typography,
} from 'styled-system';
import { withTheme } from 'emotion-theming';

const StyledFlex = styled('div')(
  {
    boxSizing: 'border-box',
    display: 'flex',
  },
  compose(space, layout, color, flexbox, background, position, shadow, border, typography),
);

const Flex = ({ children, ...rest }) => <StyledFlex {...rest}>{children}</StyledFlex>;

Flex.propTypes = {
  className: PropTypes.string,
};

export default withTheme(Flex);
