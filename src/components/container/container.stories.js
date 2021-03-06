import { storiesOf } from '@storybook/react';
import React from 'react';
import { select } from '@storybook/addon-knobs';

import Container from './container';
import CodeSnippet from '../code-snippet/code-snippet';
import { space } from '../../theme/styles/space';
import { fontSizes } from '../../theme/styles/font-sizes';
import { borders } from '../../theme/styles/borders';

const spaces = { ...space, none: undefined };

const widths = {
  '20%': 1 / 5,
  '25%': 1 / 4,
  '33%': 1 / 3,
  '50%': 1 / 2,
  '100%': 1,
};

storiesOf('Container', module).add(
  'Basic',
  () => (
    <>
      <Container
        textColor="black"
        fontSize={select('Font Size', fontSizes, fontSizes.sm, 'General')}
        width={select('Width', widths, widths['50%'], 'General')}
        margin={select('All Sides', spaces, spaces.none, 'Margin')}
        marginLeft={select('M Left', spaces, spaces.none, 'Margin')}
        mr={select('M Right', spaces, spaces.none, 'Margin')}
        mt={select('M Top', spaces, spaces.none, 'Margin')}
        mb={select('M Bottom', spaces, spaces.none, 'Margin')}
        mx={select('M Horizontal', spaces, spaces.none, 'Margin')}
        my={select('M Vertical', spaces, spaces.none, 'Margin')}
        padding={select('All', spaces, spaces.none, 'Padding')}
        pl={select('P Left', spaces, spaces.none, 'Padding')}
        pr={select('P Right', spaces, spaces.none, 'Padding')}
        pt={select('P Top', spaces, spaces.none, 'Padding')}
        pb={select('P Bottom', spaces, spaces.none, 'Padding')}
        px={select('P Horizontal', spaces, spaces.none, 'Padding')}
        py={select('P Vertical', spaces, spaces.none, 'Padding')}
        border={select('Border', borders, borders[0], 'Border')}
      >
        This is a Container
      </Container>
      <CodeSnippet>
        {`
          <Container
            padding="30px"
            width="100%">
            This is a Container
          </Container>
          `}
      </CodeSnippet>
    </>
  ),
  {
    notes: `Main container component (div) for every new page in web app.`,
  },
);
