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

const StyledAlert = styled('div')(
  {
    boxSizing: 'border-box',
    disabled: false,
    textDecoration: 'none',
    textAlign: 'left',
    fontWeight: 'bold',
    width: '100%',
  },
  props => ({
    borderRadius: themeGet('radii.sm')(props),
    border: themeGet('borders.0')(props),
    fontFamily: themeGet('fonts.sans')(props),
    color: themeGet('colors.white')(props),
    padding: `${themeGet('space.md')(props)} ${themeGet('space.lg')(props)}`,
  }),
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const Alert = ({ dataTestId, as = '', children, ...rest }) => {
  const theme = useTheme();

  return (<StyledAlert
    data-testid={dataTestId}
    style={theme.alerts[as] ? theme.alerts[as] : theme.alerts.info}
    {...rest}
  >
    {children}
  </StyledAlert>)
};

Alert.propTypes = {
  dataTestId: PropTypes.string,
  as: PropTypes.string,
};

export default withTheme(Alert);
