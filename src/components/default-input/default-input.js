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
    variant = 'default',
    wrapperProps = {},
    withAbsoluteError = false,
    withAbsoluteErrorPadding = '20px',
    errorBottomPosition = '0',
    readOnlyStyles,
    floatingLabel = false,
    customLabel,
    wrapperLabelStyles = {},
    inputFloatingStyles = {},
    containerProps = {},
    errorStyles = {},
    inputOverrideStyles = {},
    ...rest
  } = props;

  const theme = useTheme();
  const inputStyle = theme.inputTypes[variant]
    ? theme.inputTypes[variant]
    : theme.inputTypes.default;
  const errorStyle =
    touched && error
      ? variant === 'stripped'
        ? theme.inputTypes.strippedWithError
        : {
            border: `${theme.borders[1]} ${theme.colors.oranges[1100] || theme.colors.danger}`,
            borderColor: theme.colors.oranges[1100] || theme.colors.danger,
          }
      : {};
  const readOnlyStyle =
    readOnly || disabled
      ? readOnlyStyles
        ? readOnlyStyles
        : { background: theme.colors.disabled }
      : {};
  const floatingLabelInputStyles = floatingLabel
    ? { ...{ border: 'none', padding: '0px' }, ...inputFloatingStyles }
    : {};
  const labelWrapperStyles = floatingLabel ? { ...{}, ...wrapperLabelStyles } : wrapperLabelStyles;
  const containerStyles = floatingLabel
    ? {
        ...inputStyle,
        ...style,
        ...errorStyle,
        ...readOnlyStyle,
        ...inputOverrideStyles,
      }
    : {};

  return (
    <>
      <Box
        position={floatingLabel ? 'relative' : 'initial'}
        style={containerStyles}
        {...containerProps}
      >
        {(label || customLabel) && (
          <Flex alignItems="center" style={labelWrapperStyles}>
            {customLabel ? (
              customLabel
            ) : (
              <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text>
            )}
            {required && elementRequired ? elementRequired : null}
          </Flex>
        )}
        <Box
          marginTop={floatingLabel ? '0px' : '8px'}
          position="relative"
          {...wrapperProps}
          pb={withAbsoluteError ? withAbsoluteErrorPadding : '0px'}
        >
          <StyledInput
            id={id || name}
            data-testid={dataTestId}
            placeholder={placeholder}
            required={required}
            disabled={disabled || readOnly}
            style={{
              ...inputStyle,
              ...style,
              ...errorStyle,
              ...readOnlyStyle,
              ...floatingLabelInputStyles,
              ...inputOverrideStyles,
            }}
            {...rest}
            {...input}
          />
          {touched &&
            error &&
            !floatingLabel &&
            (withAbsoluteError ? (
              <Box position="absolute" bottom={errorBottomPosition} left="0">
                <Text
                  color={theme.colors.oranges[1100] || theme.colors.danger}
                  fontSize={theme.fontSizes.xs}
                  style={errorStyles}
                >
                  {error}
                </Text>
              </Box>
            ) : (
              <Text
                color={theme.colors.oranges[1100] || theme.colors.danger}
                fontSize={theme.fontSizes.xs}
                style={errorStyles}
              >
                {error}
              </Text>
            ))}
        </Box>
      </Box>
      {touched &&
        error &&
        floatingLabel &&
        (withAbsoluteError ? (
          <Box
            position="absolute"
            bottom={errorBottomPosition}
            left="0"
            style={errorStyles}
          >
            <Text
              color={theme.colors.oranges[1100] || theme.colors.danger}
              fontSize={theme.fontSizes.xs}
            >
              {error}
            </Text>
          </Box>
        ) : (
          <Text
            color={theme.colors.oranges[1100] || theme.colors.danger}
            fontSize={theme.fontSizes.xs}
            style={errorStyles}
          >
            {error}
          </Text>
        ))}
    </>
  );
};

DefaultInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
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
  variant: PropTypes.string,
  wrapperProps: PropTypes.object,
  withAbsoluteError: PropTypes.bool,
  withAbsoluteErrorPadding: PropTypes.string,
  errorBottomPosition: PropTypes.string,
  floatingLabel: PropTypes.bool,
  customLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  wrapperLabelStyles: PropTypes.object,
  inputFloatingStyles: PropTypes.object,
  containerProps: PropTypes.object,
  errorStyles: PropTypes.object,
  inputOverrideStyles: PropTypes.object,
};

export default withTheme(DefaultInput);
