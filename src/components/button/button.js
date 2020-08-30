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
import { useTheme, withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

import Box from '../box/box';
import Loader from '../loader/loader';
import RenderIf from '../render-if/render-if';

const buttonSize = variant({
  prop: 'btnSize',
  key: 'buttonSizes',
});

const StyledButton = styled(Box)(
  {
    cursor: 'pointer',
    outline: 0,
    transition: '100ms',
  },
  props => ({
    borderRadius: themeGet('radii.sm')(props),
    border: themeGet('borders.0')(props),
  }),
  compose(borders, borderColor, boxShadow, borderRadius, typography, space, color, layout),
  buttonStyle,
  buttonSize,
);

StyledButton.defaultProps = {
  as: 'button',
  disabled: false,
  btnSize: 'md',
  textDecoration: 'none',
  variant: 'primary',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
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
  const theme = useTheme();

  const DISABLED_STYLES = {
    cursor: 'not-allowed',
    color: theme.colors.white,
    backgroundColor: theme.colors.greys[300],
    boxShadow: 'none',
    ':hover': {
      color: theme.colors.white,
      backgroundColor: theme.colors.greys[300],
      boxShadow: 'none',
    },
  };

  const disabledStyle = disabled
    ? DISABLED_STYLES
    : theme.buttons[variant] || theme.buttons.primary;
  const btnSizeStyle = theme.buttonSizes[btnSize] || theme.buttonSizes.md;
  const buttonStyle = { ...disabledStyle, ...btnSizeStyle, ...style };

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
          ml={hideContentWhileLoading ? theme.space[0] : theme.space.xs}
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

export default withTheme(Button);
