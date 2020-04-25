import { storiesOf } from '@storybook/react';
import React from 'react';

import RenderIf from './render-if';
import CodeSnippet from '../code-snippet/code-snippet';

storiesOf('RenderIf', module).add(
  'Display heading with RenderIf component',
  () => (
    <>
      <RenderIf show={true}>
        <h1>Render with RenderIf component</h1>
      </RenderIf>
      <CodeSnippet>
        {`
          <RenderIf show={true}>
            <h1>Render with RenderIf component</h1>
          </RenderIf>`}
      </CodeSnippet>
    </>
  ),
  {
    notes:
      'RenderIf is a simple component for displaying some content based on boolean. If prop "show" is passed as true, content of RenderIf component will be displayed, if boolean is false, RenderIf component will return null.',
  },
);
