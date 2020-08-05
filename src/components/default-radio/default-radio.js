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
import Text from '../text/text';
import styles from './default-radio-styles';
import { generateRandomString } from '../../common/helpers';

const StyledInput = styled('input')(
  {
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '10px 0px 10px 10px',
    outline: 'none',
  },
  props => ({
    color: props.theme.colors.greys[1100],
    fontSize: props.theme.fontSizes.xs,
    border: `${props.theme.borders[1]} ${props.theme.colors.greys[1300]}`,
  }),
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
    defaultBackground,
    activeBackground,
    ...rest
  } = props;

  const theme = useTheme();
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
          background={
            checked
              ? activeBackground || theme.colors.primary
              : defaultBackground || theme.colors.greys[2000]
          }
        >
          <Box
            width="30%"
            height="30%"
            borderRadius="50%"
            background={
              checked ? theme.colors.white : defaultBackground || theme.colors.greys[2000]
            }
          ></Box>
        </Box>
      </StyledLabel>
      {error && (
        <Text color={theme.colors.oranges[1100]} fontSize={theme.fontSizes.xs}>
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
