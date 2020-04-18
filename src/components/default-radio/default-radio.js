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
import styles from './default-radio-styles';
import { generateRandomString } from '../../common/helpers';

const StyledInput = styled('input')(
  {
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '10px 0px 10px 10px',
    color: DefaultTheme.colors.greys[1100],
    fontSize: DefaultTheme.fontSizes.xs,
    border: `${DefaultTheme.borders[1]} ${DefaultTheme.colors.greys[1300]}`,
    outline: 'none',
  },
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const StyledLabel = styled('label')(
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const DefaultInput = props => {
  const {
    meta: { error },
    input,
    id,
    name,
    label = '',
    dataTestId = '',
    checked,
    defaultBackground = DefaultTheme.colors.greys[2000],
    activeBackground = DefaultTheme.colors.primary,
    ...rest
  } = props;

  const elementId = id || generateRandomString(16);

  return (
    <>
      <StyledLabel htmlFor={elementId} style={styles.label}>
        {label}
        <StyledInput
          type="radio"
          id={elementId}
          data-testid={dataTestId}
          style={styles.input}
          checked={checked}
          {...rest}
          {...input}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={styles.replacementInput}
          background={checked ? activeBackground : defaultBackground}
        >
          <Box
            width="30%"
            height="30%"
            borderRadius="50%"
            background={checked ? DefaultTheme.colors.white : defaultBackground}
          ></Box>
        </Box>
      </StyledLabel>
      {error && (
        <Text color={DefaultTheme.colors.oranges[1100]} fontSize={DefaultTheme.fontSizes.xs}>
          {error}
        </Text>
      )}
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
  checked: PropTypes.bool,
};

export default DefaultInput;
