import { storiesOf } from '@storybook/react';
import React from 'react';

import VerticalTimeline from './vertical-timeline';
import CodeSnippet from '../code-snippet/code-snippet';

const items = [
  {
    status: 3,
    title: 'This task is finished',
    subtitle: 'June 23, 2020',
  },
  {
    status: 3,
    title: 'This task is also finished',
    subtitle: 'June 26, 2020',
  },
  {
    status: 2,
    title: 'This task is in progress',
    subtitle: 'June 28, 2020',
  },
  {
    status: 1,
    title: 'This task is not done',
    subtitle: 'June 29, 2020',
  },
];

const onClick = item => {
  alert(`Item with title: "${item.title}" is clicked.`);
};

storiesOf('Vertical Timeline', module).add(
  'Basic',
  () => (
    <>
      <VerticalTimeline items={items} onClick={onClick} />
      <CodeSnippet>{`<VerticalTimeline items={items} onClick={onClick} />`}</CodeSnippet>
    </>
  ),
  {
    notes: 'The component for displaying vertical timeline. Accepts array of items with properties "status", "title" and "subtitle" to display the timeline. Also, "timelineStatuses" is required, if not sent the component will use the default array from the constants.',
  },
);
