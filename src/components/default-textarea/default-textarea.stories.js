import React from 'react';
import { storiesOf } from '@storybook/react';

import DefaultTextarea from './default-textarea';
import CodeSnippet from '../code-snippet/code-snippet';

storiesOf('DefaultTextarea', module)
  .add(
    'Basic',
    () => (
      <>
        <DefaultTextarea
          name="storybook"
          meta={{ touched: false, error: '', invalid: false }}
          label="Storybook textarea"
          rows={4}
        />
        <CodeSnippet>
          {`
            <DefaultTextarea
              name="styled-textarea"
              meta={{ touched: false, error: '', invalid: false }}
              label="This is a textarea field"
              rows={4} />`}
        </CodeSnippet>
      </>
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
