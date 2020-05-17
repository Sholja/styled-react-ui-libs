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

const StyledCard = styled('div')(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

StyledCard.defaultProps = {
  border: '0',
  borderColor: DefaultTheme.colors.greys[200],
  borderRadius: DefaultTheme.radii.sm,
  padding: DefaultTheme.space.md,
  boxShadow: DefaultTheme.shadows.box,
  background: DefaultTheme.colors.white,
};

const Card = ({ children, ...rest }) => <StyledCard {...rest}>{children}</StyledCard>;

Card.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default Card;
