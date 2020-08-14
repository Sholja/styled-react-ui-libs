import { storiesOf, forceReRender } from '@storybook/react';
import React from 'react';
import { State, Store } from '@sambego/storybook-state';

import Tabs from './tabs';
import CodeSnippet from '../code-snippet/code-snippet';

const onChange = value => {
  store.set({ active: value });
  forceReRender();
};

const tabs = [
  {
    id: 'admin',
    title: 'Admin',
  },
  {
    id: 'user',
    title: 'Regular User',
  },
  {
    id: 'super-user',
    title: 'Super User',
  },
  {
    id: 'manager',
    title: 'Manager',
  },
  {
    id: 'talent-scout',
    title: 'Talent Scout',
  },
  {
    id: 'trainer',
    title: 'Official Trainer',
  },
];

const store = new Store({
  active: 'user',
});

storiesOf('Tabs', module).add(
  'Basic',
  () => (
    <>
      <State store={store}>
        <Tabs tabs={tabs} active={store.state.active} onClick={onChange} gap="64px" />
        <CodeSnippet>{`<Tabs tabs={tabs} active={active} />`}</CodeSnippet>
      </State>
    </>
  ),
  {
    notes:
      'Component for rendering tabs. The component is expecting "tabs" prop as an array of objects with "id", "title" and "onClick" properties. Also, component is expecting prop "active" that represents and id of the tab that is active.',
  },
);
