import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import Button from './button';

const sizes = ['sm', 'md', 'lg'];
const variants = [
  'primary',
  'primaryOutline',
  'secondary',
  'secondaryOutline',
  'danger',
  'dangerOutline',
  'success',
  'successOutline',
];

storiesOf('Button', module).add('Button', () => (
  <Button
    btnSize={select('Sizes', sizes, sizes[0])}
    variant={select('Variant', variants, variants[0])}
    disabled={boolean('Disabled', false)}
  >
    Button
  </Button>
));
