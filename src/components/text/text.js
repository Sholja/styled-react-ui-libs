import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout } from 'styled-system';

import DefaultTheme from '../../theme/theme';

const StyledText = styled('p')(
  {
    margin: '0',
    fontWeight: DefaultTheme.fontWeights.normal,
    lineHeight: DefaultTheme.lineHeights.normal,
    fontFamily: DefaultTheme.fonts.sans,
  },
  compose(typography, space, color, layout),
);

const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
