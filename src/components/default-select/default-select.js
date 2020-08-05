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

import Box from '../box/box';
import Flex from '../flex/flex';
import Text from '../text/text';
import styles from './default-select-styles';

const StyledSelect = styled('select')(
  {
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '10px 0px 10px 10px',
    width: '100%',
    outline: 'none',
  },
  props => ({
    color: props.theme.colors.greys[1100],
    fontSize: props.theme.fontSizes.xs,
    border: `${props.theme.borders[1]} ${props.theme.colors.greys[1300]}`,
  }),
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const StyledOption = styled('option')(
  {},
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const DefaultSelect = props => {
  const {
    meta: { touched, error },
    options,
    input,
    placeholder,
    id,
    name,
    label,
    dataTestId = '',
    value = '',
    style = {
      outline: 'none',
    },
    labelStyle = {},
    required = false,
    elementRequired,
    ...rest
  } = props;

  const theme = useTheme();
  const errorStyle =
    touched && error ? { border: `${theme.borders[1]} ${theme.colors.oranges[1100]}` } : {};

  const selectStyles = Object.assign(style, styles.select, errorStyle);

  return (
    <>
      {label && (
        <Flex alignItems="center">
          <Text style={{ ...labelStyle, ...styles.label }}>{label}</Text>
          {required && elementRequired ? elementRequired : null}
        </Flex>
      )}
      <Box marginTop="8px" position="relative">
        <StyledSelect
          id={id || name}
          data-testid={dataTestId}
          placeholder={placeholder}
          style={selectStyles}
          value={value}
          {...rest}
          {...input}
        >
          {placeholder && (
            <StyledOption value="" disabled style={styles.label}>
              {placeholder}
            </StyledOption>
          )}
          {options.map(({ value, text }, index) => (
            <StyledOption value={value} key={`select-item-${index}`}>
              {text}
            </StyledOption>
          ))}
        </StyledSelect>
        {touched && error && (
          <Text color={theme.colors.oranges[1100]} fontSize={theme.fontSizes.xs}>
            {error}
          </Text>
        )}
      </Box>
    </>
  );
};

DefaultSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  dataTestId: PropTypes.string,
  inputProps: PropTypes.object,
  input: PropTypes.object,
  style: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType[(PropTypes.string, PropTypes.number)],
      text: PropTypes.oneOfType[(PropTypes.string, PropTypes.number)],
    }),
  ).isRequired,
  required: PropTypes.bool,
  elementRequired: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  labelStyle: PropTypes.object,
};

export default DefaultSelect;
