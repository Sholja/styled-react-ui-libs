import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import React from 'react';

import Heading from './heading';
import DefaultTheme from '../../theme/theme';

const colorStyles = [
  DefaultTheme.colors.white,
  DefaultTheme.colors.black,
  DefaultTheme.colors.primary,
  DefaultTheme.colors.warning,
  DefaultTheme.colors.success,
  DefaultTheme.colors.danger,
];

const sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

storiesOf('Heading', module).add(
  'Basic',
  () => (
    <Heading
      as={select('Size', sizes, sizes[1])}
      color={select('Colors', colorStyles, colorStyles[1])}
    >
      Just a simple component for displaying heading.
    </Heading>
  ),
  {
    notes:
      'Just a regular heading component. Prop "as" passed to the component will define which heading will be displayed.',
  },
);
