import { storiesOf, forceReRender } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import React from 'react';

import Paging from './paging';
import CodeSnippet from '../code-snippet/code-snippet';

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
      <>
      <State store={store}>
        <Paging page={store.state.page} onChange={onChange} min={number('Min elements', 1)} max={number('Max elements', 10)} />
      </State>
      <CodeSnippet>
          {`
            <Paging page="1" 
              onChange={onChange} 
              min="1"
              max="10" />`}
        </CodeSnippet>
      </>
    ),
    {
      notes: 'Component for paging. Component is expecting props: "min", "max", "page" and "onChange". See knobs for change of min and max props.',
    },
  );
