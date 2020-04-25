import { storiesOf } from '@storybook/react';
import React from 'react';

import UnorderedList from './unordered-list';
import CodeSnippet from '../code-snippet/code-snippet';

const options = ['First option', 'Second option', 'Third option'];

storiesOf('UnorderedList', module)
  .add(
    'Basic',
    () => (
      <>
        <UnorderedList options={options} />
        <CodeSnippet>
          {`
            <UnorderedList
              options={options}
              onClick={(item, index) => {
                alert("You have clicked an item.");
              }}
            />`}
        </CodeSnippet>
      </>
    ),
    {
      notes:
        'This is a simple component for displaying unordered list items. It expects prop "options", which is a array of strings.',
    },
  )
  .add(
    'With click option',
    () => (
      <UnorderedList
        options={options}
        onClick={(item, index) => {
          alert(`You have clicked option: "${item}" with position in the array: "${index}".`);
        }}
      />
    ),
    {
      notes: 'Try clicking on one of the options in the list',
    },
  );
