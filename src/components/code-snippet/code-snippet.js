import React from 'react';
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
import { withTheme } from 'emotion-theming';

import DefaultTheme from '../../theme/theme';

const StyledPre = styled('pre')(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const StyledCode = styled('code')(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

StyledPre.defaultProps = {
  background: DefaultTheme.colors.greys[2100],
  overflow: 'auto',
  borderRadius: '3px',
  padding: DefaultTheme.space.md,
  color: DefaultTheme.colors.code,
};

const CodeSnippet = ({ children, ...rest }) => (
  <StyledPre {...rest}>
    <StyledCode>{children}</StyledCode>
  </StyledPre>
);

export default withTheme(CodeSnippet);
