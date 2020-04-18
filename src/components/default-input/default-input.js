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

import Box from '../box/box';
import Text from '../text/text';
import DefaultTheme from '../../theme/theme';
import styles from './default-input-styles';

const StyledInput = styled('input')(
  {
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '10px 0px 10px 10px',
    color: DefaultTheme.colors.greys[1100],
    fontSize: DefaultTheme.fontSizes.xs,
    border: `${DefaultTheme.borders[1]} ${DefaultTheme.colors.greys[1300]}`,
    width: '100%',
    outline: 'none',
  },
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const DefaultInput = props => {
  const {
    meta: { touched, error },
    input,
    placeholder,
    id,
    name,
    label,
    dataTestId = '',
    style = {
      outline: 'none',
    },
    ...rest
  } = props;

  const errorStyle =
    touched && error
      ? { border: `${DefaultTheme.borders[1]} ${DefaultTheme.colors.oranges[1100]}` }
      : {};

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <Box marginTop="8px" position="relative">
        <StyledInput
          id={id || name}
          data-testid={dataTestId}
          placeholder={placeholder}
          style={Object.assign(style, errorStyle)}
          {...rest}
          {...input}
        />
        {touched && error && (
          <Text color={DefaultTheme.colors.oranges[1100]} fontSize={DefaultTheme.fontSizes.xs}>
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
};

export default DefaultInput;
