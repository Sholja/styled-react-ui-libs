import React from 'react';
import { storiesOf, forceReRender } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';

import DefaultCheckbox from './default-checkbox';
import CodeSnippet from '../code-snippet/code-snippet';

const store = new Store({
  active: false,
});

const onChange = e => {
  store.set({ active: e.target.value });
  forceReRender();
};

storiesOf('DefaultCheckbox', module)
  .add(
    'Basic',
    () => (
      <>
        <State store={store}>
          <DefaultCheckbox
            name="storybook-1"
            value="checkbox-input"
            meta={{ touched: false, error: '', invalid: false }}
            label="Storybook Checkbox"
            input={{
              onChange,
            }}
            checked={store.state.active === 'checkbox-input'}
          />
        </State>
        <CodeSnippet>
          {`
          <DefaultCheckbox
            name="styled-checkbox"
            meta={{ touched: false, error: '', invalid: false }}
            label="This is a checkbox field"
            checked={true}
            input={{
              onChange: handleCheckboxInputChange,
            }} />
          `}
        </CodeSnippet>
      </>
    ),
    {
      notes: 'Pretty simple input type checkbox.',
    },
  )
  .add(
    'Checkbox input with error',
    () => (
      <State store={store}>
        <DefaultCheckbox
          name="storybook"
          meta={{ touched: true, error: 'Some invalidation error', invalid: true }}
          label="Storybook input"
        />
      </State>
    ),
    {
      notes:
        'Checkbox input displaying validation error. To be displayed, component expects prop error as string to be passed.',
    },
  );
