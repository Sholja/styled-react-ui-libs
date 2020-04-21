import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import React from 'react';

import Hyperlink from './hyperlink';
import DefaultTheme from '../../theme/theme';

const colorStyles = [
  DefaultTheme.colors.white,
  DefaultTheme.colors.black,
  DefaultTheme.colors.primary,
  DefaultTheme.colors.warning,
  DefaultTheme.colors.success,
  DefaultTheme.colors.danger,
];

const fontWeights = [
  DefaultTheme.fontWeights.normal,
  DefaultTheme.fontWeights.light,
  DefaultTheme.fontWeights.black,
  DefaultTheme.fontWeights.bold,
];

const fontSizes = [
  DefaultTheme.fontSizes.xxxs,
  DefaultTheme.fontSizes.xxs,
  DefaultTheme.fontSizes.xs,
  DefaultTheme.fontSizes.sm,
  DefaultTheme.fontSizes.md,
  DefaultTheme.fontSizes.lg,
  DefaultTheme.fontSizes.xl,
  DefaultTheme.fontSizes.xxl,
];

storiesOf('Hyperlink', module)
  .add(
    'Basic',
    () => (
      <Hyperlink
        href="#"
        color={select('Colors', colorStyles, colorStyles[2])}
        fontWeight={select('Font Weights', fontWeights, fontWeights[0])}
        fontSize={select('Font Sizes', fontSizes, fontSizes[4])}
      >
        For displaying hyperlinks
      </Hyperlink>
    ),
    {
      notes:
        'This is pretty much component for displaying hyperlink.',
    },
  )
  .add(
    'With passed href',
    () => (
      <Hyperlink
        href="https://google.com"
        target="_blank"
        color={select('Colors', colorStyles, colorStyles[2])}
        fontWeight={select('Font Weights', fontWeights, fontWeights[0])}
        fontSize={select('Font Sizes', fontSizes, fontSizes[4])}
      >
        Passed "href" prop
      </Hyperlink>
    ),
    {
      notes: 'Pass href prop so that link can lead to a URL.',
    },
  )
  .add(
    'With passed function',
    () => (
      <Hyperlink
        href="#"
        onClick={() => alert('Hyperlink clicked!')}
        color={select('Colors', colorStyles, colorStyles[2])}
        fontWeight={select('Font Weights', fontWeights, fontWeights[0])}
        fontSize={select('Font Sizes', fontSizes, fontSizes[4])}
      >
        Passed "onClick" function as prop
      </Hyperlink>
    ),
    {
      notes: 'Pass "onClick" function as prop and the function will be triggered on click.',
    },
  );
