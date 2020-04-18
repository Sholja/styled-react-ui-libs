import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EmptyState from './empty-state';

const title = 'Empty state title';
const subtitle = 'Empty state with subtitle';
const untouchedComponent = <EmptyState title={title} subtitle={subtitle} />;

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders component with specified title', () => {
  const { getByText } = render(untouchedComponent);
  expect(getByText(title)).toBeDefined();
});

it('renders component with specified subtitle', () => {
  const { getByText } = render(untouchedComponent);
  expect(getByText(subtitle)).toBeDefined();
});

it('renders component with icon', () => {
  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId('empty-state-icon')).toBeDefined();
});

jest.clearAllMocks();
