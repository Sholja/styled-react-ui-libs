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

import { FOOTER_HEIGHT } from '../../common/constants';

const StyledFooter = styled('footer')(
  {
    boxSizing: 'border-box',
  },
  props => ({
    backgroundColor: props.theme.colors.white,
    boxShadow: `0 1px 0 0 ${props.theme.colors.greys[1300]}`,
    bottom: props.theme.space[0],
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

export default Footer;
