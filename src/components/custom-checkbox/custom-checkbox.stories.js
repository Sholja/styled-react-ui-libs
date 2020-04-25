import { storiesOf, forceReRender } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { select } from '@storybook/addon-knobs';
import React from 'react';

import CustomCheckbox from './custom-checkbox';
import CodeSnippet from '../code-snippet/code-snippet';
import DefaultTheme from '../../theme/theme';

const store = new Store({
  active: false,
});

const onChange = active => {
  store.set({ active: !active });
  forceReRender();
};

const colorStyles = [
  DefaultTheme.colors.white,
  DefaultTheme.colors.black,
  DefaultTheme.colors.primary,
  DefaultTheme.colors.warning,
  DefaultTheme.colors.success,
  DefaultTheme.colors.danger,
];

storiesOf('CustomCheckbox', module)
  .add(
    'Basic',
    () => (
      <>
        <State store={store}>
          <CustomCheckbox
            active={store.state.active}
            onClick={() => onChange(store.state.active)}
            meta={{ touched: false, error: '', invalid: false }}
          />
        </State>
        <CodeSnippet>
          {`
          <CustomCheckbox
            active={true}
            onClick={handleCheckboxClick}
            meta={{ touched: false, error: '', invalid: false }}
            activeColor="#000"
            inactiveColor="#CCC"
            iconColor="#FFF" />
          `}
        </CodeSnippet>
      </>
    ),
    {
      notes:
        'Custom checkbox component. Accept bool "active" which determins is checkbox clicked or not. Also accepts function "onClick".',
    },
  )
  .add(
    'With passed custom colors',
    () => (
      <State store={store}>
        <CustomCheckbox
          meta={{ touched: false, error: '', invalid: false }}
          active={store.state.active}
          onClick={() => onChange(store.state.active)}
          activeColor={select('Active checkbox color', colorStyles, colorStyles[2])}
          inactiveColor={select('Inactive checkbox color', colorStyles, colorStyles[3])}
          iconColor={select('Icon active color', colorStyles, colorStyles[0])}
        />
      </State>
    ),
    {
      notes:
        'Custom checkbox component. Accept bool "active" which determins is checkbox clicked or not. Also accepts function "onClick".',
    },
  );
