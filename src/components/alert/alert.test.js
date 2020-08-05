import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Alert from './alert';
import { wrapComponent } from '../../common/testing-helpers';

const text = 'Testing alert component...';
const dataTestId = 'alert-component';
const untouchedComponent = wrapComponent(Alert, { children: text })

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders component with specified text', () => {
  const { getByText } = render(untouchedComponent);
  expect(getByText(text)).toBeDefined();
});

it('renders success alert', () => {
  const untouchedComponent = wrapComponent(Alert, { as: 'success', dataTestId, children: text });
  const { getByTestId } = render(untouchedComponent);
  const alertComponent = getByTestId(dataTestId);
  const style = window.getComputedStyle(alertComponent);

  expect(style.backgroundColor).toBe('hsl(104, 68%, 42%)');
});

it('renders danger alert', () => {
  const untouchedComponent = wrapComponent(Alert, { as: 'danger', dataTestId, children: text });
  const { getByTestId } = render(untouchedComponent);
  const alertComponent = getByTestId(dataTestId);
  const style = window.getComputedStyle(alertComponent);

  expect(style.backgroundColor).toBe('hsl(9, 79%, 58%)');
});

jest.clearAllMocks();
