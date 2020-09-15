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
import { FaCheck } from 'react-icons/fa';
import { useTheme, withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

import Box from '../box/box';
import RenderIf from '../render-if/render-if';
import Text from '../text/text';
import styles from './default-checkbox-styles';
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
    defaultBorder = '1px solid #DFE1E6',
    activeBorder = 'none',
    checkedComponent,
    width = '16px',
    height = '16px',
    labelStyle = {},
    ...rest
  } = props;

  const theme = useTheme();
  const elementId = id || generateRandomString(16);
  const styleWithoutLabel = label ? {} : { width, height };

  return (
    <>
      <StyledLabel htmlFor={elementId} style={{ ...styles.label, ...styleWithoutLabel, ...labelStyle }}>
        {label}
        <StyledInput
          type="checkbox"
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
          border={checked ? activeBorder : defaultBorder}
          background={
            checked
              ? activeBackground || theme.colors.primary
              : defaultBackground || theme.colors.white
          }
        >
          <RenderIf show={checkedComponent ? true : false}>{checkedComponent}</RenderIf>
          <RenderIf show={checkedComponent ? false : true}>
            {checked ? <FaCheck style={{ color: theme.colors.white, fontSize: '10px' }} /> : null}
          </RenderIf>
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
  defaultBackground: PropTypes.string,
  activeBackground: PropTypes.string,
  defaultBorder: PropTypes.string,
  activeBorder: PropTypes,
  checkedComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  labelStyle: PropTypes.object,
};

export default withTheme(DefaultInput);
