import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { select } from '@storybook/addon-knobs';

import Card from './card';
import CodeSnippet from '../code-snippet/code-snippet';
import Grid from '../grid/grid';
import Text from '../text/text';
import DefaultTheme from '../../theme/theme';

const colorStyles = [
  DefaultTheme.colors.white,
  DefaultTheme.colors.black,
  DefaultTheme.colors.primary,
  DefaultTheme.colors.warning,
  DefaultTheme.colors.success,
  DefaultTheme.colors.danger,
];

storiesOf('Card', module).add(
  'Basic',
  () => (
    <>
      <Grid gridTemplateColumns="1fr 1fr 1fr">
        <Card
          background={select('Background Colors', colorStyles, colorStyles[0])}
          boxShadow={select('Shadow', DefaultTheme.shadows, DefaultTheme.shadows.box)}
          color={select('Colors', colorStyles, colorStyles[1])}
        >
          <Text m={0}>Welcome To React UI Components</Text>
        </Card>
        <Card
          background={select('Background Colors', colorStyles, colorStyles[0])}
          boxShadow={select('Shadow', DefaultTheme.shadows, DefaultTheme.shadows.box)}
          color={select('Colors', colorStyles, colorStyles[1])}
        >
          <Text m={0}>This is a second card in the grid</Text>
        </Card>
        <Card
          background={select('Background Colors', colorStyles, colorStyles[0])}
          boxShadow={select('Shadow', DefaultTheme.shadows, DefaultTheme.shadows.box)}
          color={select('Colors', colorStyles, colorStyles[1])}
        >
          <Text m={0}>This is a third card in the grid</Text>
        </Card>
      </Grid>
      <CodeSnippet>
        {`
          <Card
            background="#FFFFFF"
            color="#000000"
            boxShadow="rgba(50,50,93,0.25) 0px 2px 5px -1px, rgba(0,0,0,0.3) 0px 1px 3px -1px">
            This is a Card
          </Card>
          `}
      </CodeSnippet>
    </>
  ),
  {
    notes: 'Basic card with default white background.',
  },
);
