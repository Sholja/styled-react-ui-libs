import React from 'react';
import { storiesOf } from '@storybook/react';

import DefaultInput from './default-input';

storiesOf('DefaultInput', module)
  .add(
    'Basic',
    () => (
      <DefaultInput
        name="storybook"
        meta={{ touched: false, error: '', invalid: false }}
        label="Storybook input"
        placeholder="Please type in something here..."
      />
    ),
    {
      notes: 'Pretty simple text input.',
    },
  )
  .add(
    'Text input with error',
    () => (
      <DefaultInput
        name="storybook"
        meta={{ touched: true, error: 'Some invalidation error', invalid: true }}
        label="Storybook input"
        placeholder="This input has an error."
      />
    ),
    {
      notes:
        'Text input displaying validation error. To be displayed, component expects prop error as string to be passed.',
    },
  )
  .add(
    'With type',
    () => (
      <DefaultInput
        type="password"
        name="storybook"
        meta={{ touched: false, '': false, invalid: false }}
        label="Storybook input"
        placeholder="This is an password type input..."
      />
    ),
    {
      notes: 'You can pass input type, in this case, type is password.',
    },
  );
