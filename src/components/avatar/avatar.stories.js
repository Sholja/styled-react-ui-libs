import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import React from 'react';

import Avatar from './avatar';

const image = 'https://i.picsum.photos/id/372/200/200.jpg';

storiesOf('Avatar', module).add(
  'Basic',
  () => (
    <Avatar
      src={image}
      alt="Logo"
      width={text('Avatar width', '50px')}
      height={text('Avatar height', undefined)}
    />
  ),
  {
    notes: 'Component used for displaying avatar.',
  },
);
