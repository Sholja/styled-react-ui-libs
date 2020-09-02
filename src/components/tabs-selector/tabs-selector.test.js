import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TabsSelector from './tabs-selector';
import { wrapComponent } from '../../common/testing-helpers';

const options = [
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
];

const untouchedComponent = wrapComponent(TabsSelector, { options, value: 'user' });

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders active element', () => {
  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(`tab-item-active-user`)).toBeInTheDOM();
});

it('activates correct tab on a tab click', () => {
  let activeItem = 'admin';

  const onChange = value => {
    activeItem = value;
  };

  const untouchedComponent = wrapComponent(TabsSelector, { options, value: activeItem, onChange });
  const { getByTestId } = render(untouchedComponent);

  getByTestId(`tab-item-manager`).click();
  expect(activeItem).toBe('manager');
});

jest.clearAllMocks();
