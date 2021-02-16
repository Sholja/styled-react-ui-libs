import { storiesOf } from '@storybook/react';
import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import HideIf from './hide-if';
import CodeSnippet from '../code-snippet/code-snippet';

storiesOf('HideIf', module).add(
  'Hide conditionally component',
  () => (
    <>
      <HideIf hide={boolean('Component Hidden?', false)}>
        <h1>Inner component is now rendered.</h1>
      </HideIf>
      <CodeSnippet>
        {`
           <HideIf show={true}>
             <h1>Inner component is now rendered.</h1>
           </HideIf>`}
      </CodeSnippet>
    </>
  ),
  {
    notes:
      'HideIf is a component used for hiding other components based on the condition. The component is expecting boolean "hide" that will determine will inner child will be rendered.',
  },
);
