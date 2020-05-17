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
import Loader from '../loader/loader';
import RenderIf from '../render-if/render-if';
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
  fontWeight: 'bold',
  padding: `${DefaultTheme.space.xxs} ${DefaultTheme.space.md}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Button = ({
  dataTestId = '',
  disabled = false,
  showLoader = false,
  hideContentWhileLoading = false,
  loaderSize = '16px',
  loaderThickness = '2px',
  loaderColor,
  loaderSpinSpeed = 2,
  as,
  onClick,
  style = {},
  variant = 'primary',
  btnSize = 'md',
  children,
  ...rest
}) => {
  const buttonStyle = Object.assign(
    style,
    disabled ? DISABLED_STYLES : DefaultTheme.buttons[variant] || DefaultTheme.buttons.primary,
    DefaultTheme.buttonSizes[btnSize] || DefaultTheme.buttonSizes.md,
  );

  return (
    <StyledButton
      data-testid={dataTestId}
      as={as}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      style={buttonStyle}
      {...rest}
    >
      <RenderIf show={!hideContentWhileLoading}>{children}</RenderIf>
      <RenderIf show={showLoader}>
        <Loader
          ml={hideContentWhileLoading ? DefaultTheme.space[0] : DefaultTheme.space.xs}
          spinSpeed={loaderSpinSpeed}
          trailColor="transparent"
          size={loaderSize}
          thick={loaderThickness}
          loaderColor={loaderColor}
        />
      </RenderIf>
    </StyledButton>
  );
};

Button.propTypes = {
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
  showLoader: PropTypes.bool,
  loaderSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loaderThickness: PropTypes.string,
  loaderColor: PropTypes.string,
  as: PropTypes.string,
  variant: PropTypes.string,
  btnSize: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Button;
