import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DefaultRadio from './default-radio';

const dataTestId = 'default-radio';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const untouchedComponent = (
    <DefaultRadio
      name="test"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test radio"
      value="test"
      onChange={() => {}}
      dataTestId={dataTestId}
    />
  );
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders radio button with specified label', () => {
  const untouchedComponent = (
    <DefaultRadio
      name="test"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test radio"
      value="test"
      onChange={() => {}}
      dataTestId={dataTestId}
    />
  );

  const { getByText } = render(untouchedComponent);
  expect(getByText('Test radio')).toBeInTheDocument();
});

it('shows error text when radio button is invalid', () => {
  const untouchedComponent = (
    <DefaultRadio
      name="test"
      meta={{ touched: true, error: 'Input is invalid.', invalid: true }}
      label="Test radio"
      value="test"
      onChange={() => {}}
      dataTestId={dataTestId}
    />
  );

  const { getByText } = render(untouchedComponent);
  expect(getByText('Input is invalid.')).toBeInTheDocument();
});

it('renders radio button checked', () => {
  const untouchedComponent = (
    <DefaultRadio
      name="test"
      type="text"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test radio"
      checked
      onChange={() => {}}
      dataTestId={dataTestId}
    />
  );

  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toHaveAttribute('checked');
});

it('renders required radio button', () => {
  const untouchedComponent = (
    <DefaultRadio
      name="test"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test input"
      value="test"
      required
      onChange={() => {}}
      dataTestId={dataTestId}
    />
  );

  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toBeRequired();
});

jest.clearAllMocks();
