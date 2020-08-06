import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout } from 'styled-system';
import { withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

const StyledText = styled('p')(
  {
    margin: '0',
  },
  props => ({
    fontWeight: themeGet('fontWeights.normal')(props),
    lineHeight: themeGet('lineHeights.normal')(props),
  }),
  compose(typography, space, color, layout),
);

const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default withTheme(Text);
