import { storiesOf } from '@storybook/react';
import React from 'react';

import Grid from './grid';
import CodeSnippet from '../code-snippet/code-snippet';
import GridItem from '../grid-item/grid-item';

storiesOf('Grid', module).add('Basic', () => (
  <>
    <Grid gridTemplateColumns="repeat(4, 1fr)">
      <GridItem p="lg" bg="greys.200">
        Item 1
      </GridItem>
      <GridItem p="lg" bg="greys.200">
        Item 2
      </GridItem>
      <GridItem p="lg" bg="greys.200">
        Item 3
      </GridItem>
      <GridItem p="lg" bg="greys.200">
        Item 4
      </GridItem>
    </Grid>
    <CodeSnippet>
      {`
        <Grid gridTemplateColumns="repeat(4, 1fr)">
          <GridItem p="lg" bg="greys.200">
            Item 1
          </GridItem>
          <GridItem p="lg" bg="greys.200">
            Item 2
          </GridItem>
          <GridItem p="lg" bg="greys.200">
            Item 3
          </GridItem>
          <GridItem p="lg" bg="greys.200">
            Item 4
          </GridItem>
        </Grid>`}
    </CodeSnippet>
  </>
));
