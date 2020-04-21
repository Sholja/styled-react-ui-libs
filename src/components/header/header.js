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
  border,
  typography,
  shadow,
} from 'styled-system';

import DefaultTheme from '../../theme/theme';
import { HEADER_HEIGHT } from '../../common/constants';

const StyledHeader = styled('header')(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

StyledHeader.defaultProps = {
  backgroundColor: DefaultTheme.colors.white,
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  boxShadow: `0 1px 0 0 ${DefaultTheme.colors.greys[1300]}`,
  top: DefaultTheme.space[0],
  alignItems: 'center',
  position: 'fixed',
};

const Header = ({ height = HEADER_HEIGHT, children, ...rest }) => {
  return (
    <StyledHeader
      height={height}
      px={[DefaultTheme.space.sm, DefaultTheme.space.sm, DefaultTheme.space.lg]}
      py={[DefaultTheme.space.sm, DefaultTheme.space[0], DefaultTheme.space[0]]}
      {...rest}
    >
      {children}
    </StyledHeader>
  );
};

Header.propTypes = {
  height: PropTypes.string,
};

export default Header;
