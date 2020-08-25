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
import styles from './default-textarea-styles';
import { getArrayOfValues } from './default-textarea-helper';
import { themeGet } from '@styled-system/theme-get';

const StyledTextarea = styled('textarea')(
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

const DefaultTextarea = props => {
  const {
    meta: { touched, error },
    input = {},
    label,
    placeholder,
    id,
    name,
    dataTestId = '',
    isMultiline = false,
    onLineChanged,
    textAreaStyle = {},
    rightEl,
    rightElClick,
    rightElStyle = {},
    rightElementShouldRender = false,
    required = false,
    elementRequired,
    labelStyle = {},
    ...rest
  } = props;

  const theme = useTheme();
  const errorStyle =
    touched && error
      ? { border: `${theme.borders[1]} ${theme.colors.oranges[1100]}` }
      : {};

  const handleKeyPressed = event => {
    if (event.keyCode === 13 && isMultiline && onLineChanged) {
      const inputValues = getArrayOfValues(event.target.value);

      onLineChanged(inputValues);
    }
  };

  const renderRightElement = element => {
    return (
      <Box
        position="absolute"
        right="15px"
        top="50%"
        style={Object.assign(rightElStyle, { transform: 'translateY(-50%)' }, rightElClick ? { cursor: 'pointer' } : {})}
        onClick={rightElClick}
      >
        {typeof element === 'function' ? element() : element}
      </Box>
    );
  };

  return (
    <>
      {label && (
        <Flex alignItems="center">
          <Text style={{ ...labelStyle, ...styles.label }}>{label}</Text>
          {required && elementRequired ? elementRequired : null}
        </Flex>
      )}
      <Box marginTop="8px" position="relative">
        <StyledTextarea
          id={id || name}
          data-testid={dataTestId}
          style={{...textAreaStyle, ...errorStyle}}
          onKeyUp={handleKeyPressed}
          placeholder={placeholder}
          {...rest}
          {...input}
        />
        {rightEl && rightElementShouldRender && renderRightElement(rightEl)}
      </Box>
      {touched && error && <Text color={theme.colors.oranges[1100]} fontSize={theme.fontSizes.xs}>{error}</Text>}
    </>
  );
};

DefaultTextarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  dataTestId: PropTypes.string,
  inputProps: PropTypes.object,
  input: PropTypes.object,
  isMultiline: PropTypes.bool,
  onLineChanged: PropTypes.func,
  textAreaStyle: PropTypes.object,
  rightEl: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]),
  rightElClick: PropTypes.func,
  rightElStyle: PropTypes.object,
  rightElementShouldRender: PropTypes.bool,
  required: PropTypes.bool,
  elementRequired: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  labelStyle: PropTypes.object,
};

export default withTheme(DefaultTextarea);
