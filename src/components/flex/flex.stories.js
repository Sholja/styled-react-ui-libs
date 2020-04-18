import { storiesOf } from '@storybook/react';
import React from 'react';

import Flex from './flex';
import Box from '../box/box';

storiesOf('Flex', module).add('Basic', () => (
  <Flex>
    <Box border="1" p="lg">Item 1</Box>
    <Box border="1" p="lg">Item 2</Box>
  </Flex>
));
