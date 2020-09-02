import { storiesOf, forceReRender } from '@storybook/react';
import React from 'react';
import { State, Store } from '@sambego/storybook-state';

import TabsSelector from './tabs-selector';
import CodeSnippet from '../code-snippet/code-snippet';

const onChange = value => {
  store.set({ active: value });
  forceReRender();
};

const tabs = [
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'user',
    label: 'Regular User',
  },
  {
    value: 'super-user',
    label: 'Super User',
  },
  {
    value: 'manager',
    label: 'Manager',
  },
  {
    value: 'talent-scout',
    label: 'Talent Scout',
  },
  {
    value: 'trainer',
    label: 'Official Trainer',
  },
];

const store = new Store({
  active: 'user',
});

storiesOf('Tabs Selector', module).add(
  'Basic',
  () => (
    <>
      <State store={store}>
        <TabsSelector options={tabs} value={store.state.active} onChange={onChange} />
        <CodeSnippet>{`<TabsSelector options={tabs} value={store.state.active} onChange={onChange} />`}</CodeSnippet>
      </State>
    </>
  ),
  {
    notes:
      'Component for rendering tab buttons. The component is expecting "options" prop as an array of objects with "value", and "label" properties (these can be overrided with "fieldValue" and "fieldLabel"). Also, component is expecting prop "value" that represents value of the tab that is active.',
  },
);
