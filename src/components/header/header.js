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
import { useTheme } from 'emotion-theming';

import { HEADER_HEIGHT } from '../../common/constants';

const StyledHeader = styled('header')(
  {
    boxSizing: 'border-box',
  },
  props => ({
    backgroundColor: props.theme.colors.white,
    boxShadow: `0 1px 0 0 ${props.theme.colors.greys[1300]}`,
    top: props.theme.space[0],
  }),
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

StyledHeader.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  alignItems: 'center',
  position: 'fixed',
};

const Header = ({ height = HEADER_HEIGHT, children, ...rest }) => {
  const theme = useTheme();

  return (
    <StyledHeader
      height={height}
      px={[theme.space.sm, theme.space.sm, theme.space.lg]}
      py={[theme.space.sm, theme.space[0], theme.space[0]]}
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
