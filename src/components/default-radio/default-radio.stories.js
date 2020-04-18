import React from 'react';
import { storiesOf, forceReRender } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';

import DefaultRadio from './default-radio';

const store = new Store({
  active: false,
});

const onChange = e => {
  store.set({ active: e.target.value });
  forceReRender();
};

storiesOf('DefaultRadio', module)
  .add(
    'Basic',
    () => (
      <State store={store}>
        <DefaultRadio
          name="storybook-1"
          value="radio-input-1"
          meta={{ touched: false, error: '', invalid: false }}
          label="Storybook Radio 1"
          input={{
            onChange,
          }}
          checked={store.state.active === 'radio-input-1'}
        />
        <DefaultRadio
          name="storybook-2"
          value="radio-input-2"
          meta={{ touched: false, error: '', invalid: false }}
          label="Storybook Radio 2"
          input={{
            onChange,
          }}
          checked={store.state.active === 'radio-input-2'}
        />
        <DefaultRadio
          name="storybook-3"
          value="radio-input-3"
          meta={{ touched: false, error: '', invalid: false }}
          label="Storybook Radio 3"
          input={{
            onChange,
          }}
          checked={store.state.active === 'radio-input-3'}
        />
      </State>
    ),
    {
      notes: 'Pretty simple input type radio.',
    },
  )
  .add(
    'Text input with error',
    () => (
      <State store={store}>
        <DefaultRadio
          name="storybook"
          meta={{ touched: true, error: 'Some invalidation error', invalid: true }}
          label="Storybook input"
        />
      </State>
    ),
    {
      notes:
        'Radio input displaying validation error. To be displayed, component expects prop error as string to be passed.',
    },
  );
