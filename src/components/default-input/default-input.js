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

import Box from '../box/box';
import Flex from '../flex/flex';
import Text from '../text/text';
import styles from './default-input-styles';
import { themeGet } from '@styled-system/theme-get';

const StyledInput = styled('input')(
  {
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '10px 0px 10px 10px',
    width: '100%',
    outline: 'none',
  },
  props => ({
    color: themeGet('colors.greys.1100')(props),
    fontSize: themeGet('fontSizes.xs')(props),
    border: `${themeGet('borders.1')(props)} ${themeGet('colors.greys.1300')(props)}`,
  }),
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const DefaultInput = props => {
  const {
    meta: { touched, error },
    input,
    placeholder,
    required = false,
    elementRequired,
    id,
    name,
    label,
    dataTestId = '',
    style = {
      outline: 'none',
    },
    labelStyle = {},
    readOnly = false,
    disabled = false,
    ...rest
  } = props;

  const theme = useTheme();
  const errorStyle =
    touched && error ? { border: `${theme.borders[1]} ${theme.colors.oranges[1100]}` } : {};
  const readOnlyStyle = readOnly ? { background: theme.colors.disabled } : {};

  return (
    <>
      {label && (
        <Flex alignItems="center">
          <Text style={{ ...labelStyle, ...styles.label }}>{label}</Text>
          {required && elementRequired ? elementRequired : null}
        </Flex>
      )}
      <Box marginTop="8px" position="relative">
        <StyledInput
          id={id || name}
          data-testid={dataTestId}
          placeholder={placeholder}
          required={required}
          disabled={disabled || readOnly}
          style={{ ...style, ...errorStyle, ...readOnlyStyle }}
          {...rest}
          {...input}
        />
        {touched && error && (
          <Text color={theme.colors.oranges[1100]} fontSize={theme.fontSizes.xs}>
            {error}
          </Text>
        )}
      </Box>
    </>
  );
};

DefaultInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  dataTestId: PropTypes.string,
  inputProps: PropTypes.object,
  input: PropTypes.object,
  style: PropTypes.object,
  required: PropTypes.bool,
  elementRequired: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  labelStyle: PropTypes.object,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default withTheme(DefaultInput);
