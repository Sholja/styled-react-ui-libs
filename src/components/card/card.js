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
import { withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

const StyledCard = styled('div')(
  {
    boxSizing: 'border-box',
  },
  props => ({
    borderColor: themeGet('colors.greys.200')(props),
    borderRadius: themeGet('radii.sm')(props),
    padding: themeGet('space.md')(props),
    boxShadow: themeGet('shadows.box')(props),
    background: themeGet('colors.white')(props),
  }),
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

StyledCard.defaultProps = {
  border: '0',
};

const Card = ({ children, ...rest }) => <StyledCard {...rest}>{children}</StyledCard>;

Card.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default withTheme(Card);
