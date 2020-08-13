import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Tabs from './tabs';
import { wrapComponent } from '../../common/testing-helpers';

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
];

const untouchedComponent = wrapComponent(Tabs, { tabs, active: 'user' });

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

  const tabItems = [
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
  ];

  const untouchedComponent = wrapComponent(Tabs, { tabs: tabItems, active: activeItem, onClick: onChange });
  const { getByTestId } = render(untouchedComponent);

  getByTestId(`tab-item-manager`).click();
  expect(activeItem).toBe('manager');
});

jest.clearAllMocks();
