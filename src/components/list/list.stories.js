import { storiesOf } from '@storybook/react';
import React from 'react';

import List from './list';
import CodeSnippet from '../code-snippet/code-snippet';

const options = [
    {
      id: 'admin',
      text: 'Admin',
    },
    {
      id: 'user',
      text: 'Regular User',
    },
    {
      id: 'super-user',
      text: 'Super User',
    },
    {
      id: 'manager',
      text: 'Manager',
    },
    {
      id: 'talent-scout',
      text: 'Talent Scout',
    },
    {
      id: 'trainer',
      text: 'Official Trainer',
    },
  ];

storiesOf('List', module).add(
  'Vertical List',
  () => (
    <>
      <List options={options} />
      <CodeSnippet>
        {`<List options={options} />`}
      </CodeSnippet>
    </>
  ),
  {
    notes:
      'Component for displaying list of the items vertically.',
  },
)
.add(
    'Horizontal List',
    () => (
      <>
        <List options={options} type='horizontal' />
        <CodeSnippet>
          {`<List options={options} type='horizontal' />`}
        </CodeSnippet>
      </>
    ),
    {
      notes:
        'Component for displaying list of the items horizontally.',
    },
  );
