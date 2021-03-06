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
import { useTheme, withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

import { FOOTER_HEIGHT } from '../../common/constants';

const StyledFooter = styled('footer')(
  {
    boxSizing: 'border-box',
  },
  props => ({
    backgroundColor: themeGet('colors.white')(props),
    boxShadow: `0 1px 0 0 ${themeGet('colors.greys.1300')(props)}`,
    bottom: themeGet('space.0')(props),
  }),
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

StyledFooter.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  alignItems: 'center',
};

const Footer = ({ height = FOOTER_HEIGHT, isFloatingFooter = false, children, ...rest }) => {
  const theme = useTheme();

  return (
    <StyledFooter
      height={height}
      px={[theme.space.sm, theme.space.sm, theme.space.lg]}
      py={[theme.space.sm, theme.space[0], theme.space[0]]}
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

export default withTheme(Footer);
