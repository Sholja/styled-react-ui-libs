import { storiesOf } from '@storybook/react';
import { date, color, number } from '@storybook/addon-knobs';
import React from 'react';

import HorizontalTimeline from './horizontal-timeline';
import CodeSnippet from '../code-snippet/code-snippet';

let startDate = new Date();
startDate.setDate(startDate.getDate() - 5);

let endDate = new Date();
endDate.setDate(endDate.getDate() + 12);

storiesOf('HorizontalTimeline', module).add(
  'Basic',
  () => (
    <>
      <HorizontalTimeline
        mb="50px"
        height={number('Component Height', 24)}
        startDate={date('Start Date', startDate)}
        endDate={date('End Date', endDate)}
        background={color('Rest Background', '#F1F4F7')}
        passedColor={color('Passed Background', '#eaf6ec')}
        separatorColor={color('Separator Color Background', '#9ae6b4')}
      />
      <CodeSnippet>{`<HorizontalTimeline startDate={startDate} endDate={endDate} />`}</CodeSnippet>
    </>
  ),
  {
    notes: 'HorizontalTimeline component. The component expects the "startDate" and the "endDate" end display the timeline.',
  },
);
