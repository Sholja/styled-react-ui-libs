import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DefaultTextarea from './default-textarea';

const dataTestId = 'default-textarea';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const untouchedComponent = (
    <DefaultTextarea
      name="test"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test input"
    />
  );
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders input with specified label', () => {
  const untouchedComponent = (
    <DefaultTextarea
      name="test"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test input"
    />
  );

  const { getByText } = render(untouchedComponent);
  expect(getByText('Test input')).toBeInTheDocument();
});

it('renders type attribute on input', () => {
  const untouchedComponent = (
    <DefaultTextarea
      name="test"
      type="text"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test input"
      dataTestId={dataTestId}
    />
  );

  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toHaveAttribute('type', 'text');
});

it('shows error text when input is invalid', () => {
  const untouchedComponent = (
    <DefaultTextarea
      name="test"
      meta={{ touched: true, error: 'Input is invalid.', invalid: true }}
      label="Test input"
      dataTestId={dataTestId}
    />
  );

  const { getByText } = render(untouchedComponent);
  expect(getByText('Input is invalid.')).toBeInTheDocument();
});

it('renders input with specified value', () => {
  const untouchedComponent = (
    <DefaultTextarea
      name="test"
      type="text"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test input"
      value="test"
      onChange={() => {}}
      dataTestId={dataTestId}
    />
  );

  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toHaveValue('test');
});

it('renders required input', () => {
  const untouchedComponent = (
    <DefaultTextarea
      name="test"
      type="text"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test input"
      required
      dataTestId={dataTestId}
    />
  );

  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toBeRequired();
});

jest.clearAllMocks();
