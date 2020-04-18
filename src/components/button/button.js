import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  buttonStyle,
  variant,
  borders,
  borderColor,
  boxShadow,
  borderRadius,
  typography,
  space,
  color,
  compose,
  layout,
} from 'styled-system';

import Box from '../box/box';
import DefaultTheme from '../../theme/theme';

const buttonSize = variant({
  prop: 'btnSize',
  key: 'buttonSizes',
});

const DISABLED_STYLES = {
  cursor: 'not-allowed',
  color: DefaultTheme.colors.white,
  backgroundColor: DefaultTheme.colors.greys[300],
  boxShadow: 'none',
  ':hover': {
    color: DefaultTheme.colors.white,
    backgroundColor: DefaultTheme.colors.greys[300],
    boxShadow: 'none',
  },
};

const StyledButton = styled(Box)(
  {
    cursor: 'pointer',
    display: 'inline-block',
    outline: 0,
    transition: '100ms',
  },
  compose(borders, borderColor, boxShadow, borderRadius, typography, space, color, layout),
  buttonStyle,
  buttonSize,
  ({ disabled }) => (disabled ? DISABLED_STYLES : {}),
);

StyledButton.defaultProps = {
  as: 'button',
  borderRadius: DefaultTheme.radii.sm,
  border: DefaultTheme.borders[0],
  disabled: false,
  fontFamily: DefaultTheme.fonts.sans,
  btnSize: 'md',
  textDecoration: 'none',
  variant: 'primary',
  textAlign: 'center',
  fontWeight: 'bold',
  padding: `${DefaultTheme.space.xxs} ${DefaultTheme.space.md}`,
};

const Button = ({ dataTestId, disabled, as, onClick, ...rest }) => {
  return (
    <StyledButton
      data-testid={dataTestId}
      as={as}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...rest}
    />
  );
};

Button.propTypes = {
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
  as: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
