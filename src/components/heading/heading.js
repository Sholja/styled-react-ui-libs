import React from 'react';

import styled from '@emotion/styled';
import { variant, typography, space, color, compose, layout } from 'styled-system';

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
  fontFamily: Theme.fonts.sans,
};

const Heading = props => <StyledHeading {...props} />;

export default Heading;
