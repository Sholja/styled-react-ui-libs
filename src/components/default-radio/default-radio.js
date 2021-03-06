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
    color: themeGet('colors.greys.1100')(props),
    fontSize: themeGet('fontSizes.xs')(props),
    border: `${themeGet('borders.1')(props)} ${themeGet('colors.greys.1300')(props)}`,
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
    fakeRadioStyles = {},
    replacementInputStyles = {},
    labelStyle = {},
    errorStyles = {},
    ...rest
  } = props;

  const theme = useTheme();
  const elementId = id || generateRandomString(16);

  return (
    <>
      <StyledLabel htmlFor={elementId} style={{ ...styles.label, ...labelStyle }}>
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
          style={{ ...styles.replacementInput, ...replacementInputStyles }}
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
            style={fakeRadioStyles}
          ></Box>
        </Box>
      </StyledLabel>
      {error && (
        <Text
          color={theme.colors.oranges[1100] || theme.colors.danger}
          fontSize={theme.fontSizes.xs}
          style={errorStyles}
        >
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
  fakeRadioStyles: PropTypes.object,
  replacementInputStyles: PropTypes.object,
  labelStyle: PropTypes.object,
  errorStyles: PropTypes.object,
};

export default withTheme(DefaultInput);
