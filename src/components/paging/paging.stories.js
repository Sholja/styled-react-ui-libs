import { storiesOf, forceReRender } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import React from 'react';

import Paging from './paging';

const store = new Store({
  page: 1,
});

const onChange = value => {
  store.set({ page: value });
  forceReRender();
};

storiesOf('Paging', module)
  .add(
    'Basic',
    () => (
      <State store={store}>
        <Paging page={store.state.page} onChange={onChange} min={number('Min elements', 1)} max={number('Max elements', 10)} />
      </State>
    ),
    {
      notes: 'Component for paging. Component is expecting props: "min", "max", "page" and "onChange". See knobs for change of min and max props.',
    },
  );
