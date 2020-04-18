import React from 'react';
import { storiesOf } from '@storybook/react';

import DefaultTextarea from './default-textarea';

storiesOf('DefaultTextarea', module)
  .add(
    'Basic',
    () => (
      <DefaultTextarea
        name="storybook"
        meta={{ touched: false, error: '', invalid: false }}
        label="Storybook textarea"
        rows={4}
      />
    ),
    {
      notes: 'Pretty simple textarea input.',
    },
  )
  .add(
    'Textarea input with error',
    () => (
      <DefaultTextarea
        name="storybook"
        variant="outlined"
        meta={{ touched: true, error: 'Some invalidation error', invalid: true }}
        label="Storybook textarea"
        rows={4}
      />
    ),
    {
      notes:
        'Textarea input displaying validation error. To be displayed, component expects prop error as string to be passed.',
    },
  );
