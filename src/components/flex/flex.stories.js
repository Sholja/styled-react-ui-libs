import { storiesOf } from '@storybook/react';
import React from 'react';

import Flex from './flex';
import Box from '../box/box';
import CodeSnippet from '../code-snippet/code-snippet';

storiesOf('Flex', module).add('Basic', () => (
  <>
    <Flex>
      <Box border="1" p="lg">
        Item 1
      </Box>
      <Box border="1" p="lg">
        Item 2
      </Box>
    </Flex>
    <CodeSnippet>
      {`
        <Flex alignItems="center" justifyContent="center">
          <Box border="1" p="lg">
            Item 1
          </Box>
          <Box border="1" p="lg">
            Item 2
          </Box>
        </Flex>`}
    </CodeSnippet>
  </>
));
