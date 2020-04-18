import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import React from 'react';

import Image from './image';
import logo from '../../assets/mop-logo.jpg';

const sizes = {
  '20px': '20px',
  '50px': '50px',
  '100px': '100px',
  '200px': '200px',
  '300px': '300px',
  '100%': '100%',
};

storiesOf('Image', module).add(
  'Basic',
  () => (
    <Image
      src={logo}
      alt="Logo"
      width={select('Width', sizes, sizes['100px'], 'General')}
    />
  ),
  {
    notes: 'Renders image tag. Props "src" and "alt" are required.',
  },
);
