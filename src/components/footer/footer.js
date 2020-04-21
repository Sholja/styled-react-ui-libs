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
import { FOOTER_HEIGHT } from '../../common/constants';

const StyledFooter = styled('footer')(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

StyledFooter.defaultProps = {
  backgroundColor: DefaultTheme.colors.white,
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  boxShadow: `0 1px 0 0 ${DefaultTheme.colors.greys[1300]}`,
  bottom: DefaultTheme.space[0],
  alignItems: 'center',
};

const Footer = ({ height = FOOTER_HEIGHT, isFloatingFooter = false, children, ...rest }) => {
  return (
    <StyledFooter
      height={height}
      px={[DefaultTheme.space.sm, DefaultTheme.space.sm, DefaultTheme.space.lg]}
      py={[DefaultTheme.space.sm, DefaultTheme.space[0], DefaultTheme.space[0]]}
      position={isFloatingFooter ? 'fixed' : 'absolute'}
      {...rest}
    >
      {children}
    </StyledFooter>
  );
};

Footer.propTypes = {
  height: PropTypes.string,
  isFloatingFooter: PropTypes.bool,
};

export default Footer;
