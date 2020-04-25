import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import React from 'react';

import Text from './text';
import CodeSnippet from '../code-snippet/code-snippet';
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

storiesOf('Text', module).add(
  'Basic',
  () => (
    <>
      <Text
        color={select('Colors', colorStyles, colorStyles[1])}
        fontWeight={select('Font Weights', fontWeights, fontWeights[0])}
        fontSize={select('Font Sizes', fontSizes, fontSizes[4])}
      >
        Just a simple component for displaying text.
      </Text>
      <CodeSnippet>
        {`
          <Text
            color="#000"
            fontWeight="bold"
            fontSize="14px"
          >
            Just a simple component for displaying text.
          </Text>`}
      </CodeSnippet>
    </>
  ),
  {
    notes:
      'This is pretty much component for displaying text. It is just paragraphs wrapped as styled component.',
  },
);
