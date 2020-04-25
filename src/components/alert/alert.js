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

const StyledAlert = styled('div')(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

StyledAlert.defaultProps = {
  borderRadius: DefaultTheme.radii.sm,
  border: DefaultTheme.borders[0],
  disabled: false,
  fontFamily: DefaultTheme.fonts.sans,
  btnSize: 'md',
  textDecoration: 'none',
  color: DefaultTheme.colors.white,
  textAlign: 'left',
  fontWeight: 'bold',
  padding: `${DefaultTheme.space.md} ${DefaultTheme.space.lg}`,
  width: '100%',
};

const Alert = ({ dataTestId, as = '', children, ...rest }) => (
  <StyledAlert
    data-testid={dataTestId}
    style={DefaultTheme.alerts[as] ? DefaultTheme.alerts[as] : DefaultTheme.alerts.info}
    {...rest}
  >
    {children}
  </StyledAlert>
);

Alert.propTypes = {
  dataTestId: PropTypes.string,
  as: PropTypes.string,
};

export default Alert;
