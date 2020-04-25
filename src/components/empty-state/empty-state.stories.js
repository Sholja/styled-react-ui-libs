import { storiesOf } from '@storybook/react';
import React from 'react';
import { FaQuestion } from 'react-icons/fa';

import EmptyState from './empty-state';
import CodeSnippet from '../code-snippet/code-snippet';

storiesOf('EmptyState', module)
  .add(
    'Basic',
    () => (
      <>
        <EmptyState />
        <CodeSnippet>
          {`
            <EmptyState
              title="This is a empty state"
              subtitle="And I'm a subtitle which will explain something"
              label="This is a textarea field"
              icon={FaQuestion} />`}
        </CodeSnippet>
      </>
    ),
    {
      notes: 'For displaying empty state on a page.',
    },
  )
  .add(
    'With subtitle',
    () => (
      <EmptyState
        title="This is a empty state"
        subtitle="And I'm a subtitle which will explain something"
      />
    ),
    {
      notes:
        'You can override default title by passing "title" prop. Also, component is expecting prop "subtitle", which will display text content below title.',
    },
  )
  .add(
    'With passed icon',
    () => (
      <EmptyState
        title="This is a empty state"
        subtitle="And I'm a subtitle which will explain something"
        icon={FaQuestion}
      />
    ),
    {
      notes: 'You can also pass "icon" prop, which will override default icon in the component.',
    },
  );
