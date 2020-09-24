import { storiesOf } from '@storybook/react';
import React from 'react';

import Iframe from './iframe';
import CodeSnippet from '../code-snippet/code-snippet';

storiesOf('Iframe', module).add(
  'Basic',
  () => (
    <>
      <Iframe title="Title Test" src="https://www.instagram.com/p/CAo8KYennQ0/embed" />
      <CodeSnippet>
        {`<Iframe title="Title Test" src="https://www.instagram.com/p/CAo8KYennQ0/embed" />`}
      </CodeSnippet>
    </>
  ),
  {
    notes:
      'Basic style Iframe component for display source page.',
  },
);
