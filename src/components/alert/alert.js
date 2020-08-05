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
    borderRadius: props.theme.radii.sm,
    border: props.theme.borders[0],
    fontFamily: props.theme.fonts.sans,
    color: props.theme.colors.white,
    padding: `${props.theme.space.md} ${props.theme.space.lg}`,
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

export default Alert;
