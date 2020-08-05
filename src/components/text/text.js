import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout } from 'styled-system';

const StyledText = styled('p')(
  {
    margin: '0',
  },
  props => ({
    fontWeight: props.theme.fontWeights.normal,
    lineHeight: props.theme.lineHeights.normal,
  }),
  compose(typography, space, color, layout),
);

const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
