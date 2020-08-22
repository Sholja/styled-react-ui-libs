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
import { IoIosArrowDown } from 'react-icons/io';
import { useTheme, withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

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
    color: themeGet('colors.greys.1100')(props),
    fontSize: themeGet('fontSizes.xs')(props),
    border: `${themeGet('borders.1')(props)} ${themeGet('colors.greys.1300')(props)}`,
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
    arrowElement,
    arrowStyles = {},
    ...rest
  } = props;

  const theme = useTheme();
  const errorStyle =
    touched && error ? { border: `${theme.borders[1]} ${theme.colors.oranges[1100]}` } : {};

  const selectStyles = { ...styles.select, ...errorStyle, ...style };

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
        <Box
          position="absolute"
          right="10px"
          style={{ ...{ transform: 'translateY(-135%)', cursor: 'pointer' }, arrowStyles }}
        >
          {arrowElement ? arrowElement : <IoIosArrowDown />}
        </Box>
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
  arrowElement: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  arrowStyles: PropTypes.object,
};

export default withTheme(DefaultSelect);
