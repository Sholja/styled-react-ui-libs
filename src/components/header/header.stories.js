import { storiesOf } from '@storybook/react';
import React from 'react';
import { select } from '@storybook/addon-knobs';

import Header from './header';
import Text from '../text/text';
import DefaultTheme from '../../theme/theme';

const heights = {
  '60px': '60px',
  '80px': '80px',
  '100px': '100px',
  '120px': '120px',
};

const colorStyles = [
  DefaultTheme.colors.white,
  DefaultTheme.colors.primary,
  DefaultTheme.colors.warning,
  DefaultTheme.colors.success,
  DefaultTheme.colors.danger,
];

storiesOf('Header', module).add(
  'Basic',
  () => (
    <Header
      height={select('Height', heights, heights['100px'])}
      backgroundColor={select('Colors', colorStyles, colorStyles[0])}
    >
      <Text>First item in the header</Text>
      <Text ml={DefaultTheme.space.md}>Second item in the header</Text>
    </Header>
  ),
  {
    notes: `Header component which will be always fixed to the top of the page.`,
  },
);
