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

const StyledCard = styled('div')(
  {
    boxSizing: 'border-box',
  },
  props => ({
    borderColor: props.theme.colors.greys[200],
    borderRadius: props.theme.radii.sm,
    padding: props.theme.space.md,
    boxShadow: props.theme.shadows.box,
    background: props.theme.colors.white,
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

export default Card;
