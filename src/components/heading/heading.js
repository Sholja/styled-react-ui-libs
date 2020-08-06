import React from 'react';

import styled from '@emotion/styled';
import { variant, typography, space, color, compose, layout } from 'styled-system';
import { withTheme } from 'emotion-theming';

import Box from '../box/box';
import Theme from '../../theme/theme';

const level = variant({
  prop: 'level',
  key: 'headingSizes',
});

const StyledHeading = styled(Box)({}, level, typography, space, color, compose, layout);

StyledHeading.defaultProps = {
  as: 'h1',
  fontWeight: Theme.fontWeights.bold,
};

const Heading = props => <StyledHeading {...props} />;

export default withTheme(Heading);
