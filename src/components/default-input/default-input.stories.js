import React from 'react';
import { storiesOf } from '@storybook/react';

import DefaultInput from './default-input';
import Box from '../box/box';
import CodeSnippet from '../code-snippet/code-snippet';

const RequiredElement = <Box borderRadius="50%" width="4px" height="4px" backgroundColor="red" />;

storiesOf('DefaultInput', module)
  .add(
    'Basic',
    () => (
      <>
        <DefaultInput
          name="storybook"
          meta={{ touched: false, error: '', invalid: false }}
          label="Storybook input"
          placeholder="Please type in something here..."
        />
        <CodeSnippet>
          {`
          <DefaultInput
            name="styled-input"
            meta={{ touched: false, error: '', invalid: false }}
            label="This is a input field"
            placeholder="This is a placeholder of the field"
            type="password" />
          `}
        </CodeSnippet>
      </>
    ),
    {
      notes: 'Pretty simple text input.',
    },
  )
  .add(
    'Text input with error',
    () => (
      <DefaultInput
        name="storybook"
        meta={{ touched: true, error: 'Some invalidation error', invalid: true }}
        label="Storybook input"
        placeholder="This input has an error."
        withAbsoluteError
      />
    ),
    {
      notes:
        'Text input displaying validation error. To be displayed, component expects prop error as string to be passed.',
    },
  )
  .add(
    'With type',
    () => (
      <DefaultInput
        type="password"
        name="storybook"
        meta={{ touched: false, '': false, invalid: false }}
        label="Storybook input"
        placeholder="This is an password type input..."
      />
    ),
    {
      notes: 'You can pass input type, in this case, type is password.',
    },
  )
  .add(
    'Required',
    () => (
      <DefaultInput
        type="text"
        name="storybook"
        meta={{ touched: false, '': false, invalid: false }}
        label="Storybook input"
        required
        elementRequired={RequiredElement}
        placeholder="This is a required input"
      />
    ),
    {
      notes: 'You can pass input type, in this case, type is password.',
    },
  )
  .add(
    'Stripped Input',
    () => (
      <DefaultInput
        type="text"
        name="storybook"
        meta={{ touched: false, error: '', invalid: false }}
        label="Stripped input"
        variant="stripped"
        placeholder="This is a stripped input"
      />
    ),
    {
      notes: 'You can pass the boolean, "isStripped", and it will render different type of input.',
    },
  )
  .add(
    'Text input floating label',
    () => (
      <DefaultInput
        name="storybook"
        meta={{ touched: true, error: 'Some invalidation error', invalid: true }}
        label="Storybook input"
        placeholder="Types something here"
        floatingLabel
      />
    ),
    {
      notes:
        'If the "floatingLabel" prop is passed as true, label will be inside the input.',
    },
  );
