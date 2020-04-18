import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Alert from './alert';

const text = 'Testing alert component...';
const dataTestId = 'alert-component';
const untouchedComponent = <Alert>{text}</Alert>;

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
  const untouchedComponent = (
    <Alert as="success" dataTestId={dataTestId}>
      {text}
    </Alert>
  );
  const { getByTestId } = render(untouchedComponent);
  const alertComponent = getByTestId(dataTestId);
  const style = window.getComputedStyle(alertComponent);

  expect(style.backgroundColor).toBe('hsl(104, 68%, 42%)');
});

it('renders danger alert', () => {
  const untouchedComponent = (
    <Alert as="danger" dataTestId={dataTestId}>
      {text}
    </Alert>
  );
  const { getByTestId } = render(untouchedComponent);
  const alertComponent = getByTestId(dataTestId);
  const style = window.getComputedStyle(alertComponent);

  expect(style.backgroundColor).toBe('hsl(9, 79%, 58%)');
});

jest.clearAllMocks();
