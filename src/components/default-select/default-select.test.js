import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DefaultSelect from './default-select';

const dataTestId = 'default-select';

const options = [
  {
    value: 1,
    text: 'First Option',
  },
  {
    value: 2,
    text: 'Second Option',
  },
  {
    value: 3,
    text: 'Third Option',
  },
];

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const untouchedComponent = (
    <DefaultSelect
      name="test"
      type="text"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test input"
      value="test"
      onChange={() => {}}
      dataTestId={dataTestId}
      options={options}
    />
  );
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders select with specified label', () => {
  const untouchedComponent = (
    <DefaultSelect
      name="test"
      type="text"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test input"
      value="test"
      onChange={() => {}}
      dataTestId={dataTestId}
      options={options}
    />
  );

  const { getByText } = render(untouchedComponent);
  expect(getByText('Test input')).toBeInTheDocument();
});

it('shows error text when select is invalid', () => {
  const untouchedComponent = (
    <DefaultSelect
      name="test"
      type="text"
      meta={{ touched: true, error: 'Input is invalid.', invalid: true }}
      label="Test input"
      value="test"
      onChange={() => {}}
      dataTestId={dataTestId}
      options={options}
    />
  );

  const { getByText } = render(untouchedComponent);
  expect(getByText('Input is invalid.')).toBeInTheDocument();
});

it('renders select with specified value', () => {
  const untouchedComponent = (
    <DefaultSelect
      name="test"
      type="text"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test input"
      value={1}
      onChange={() => {}}
      dataTestId={dataTestId}
      options={options}
    />
  );

  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toHaveValue('1');
});

it('renders required select', () => {
  const untouchedComponent = (
    <DefaultSelect
      name="test"
      type="text"
      meta={{ touched: false, error: '', invalid: false }}
      label="Test input"
      value="test"
      required
      onChange={() => {}}
      dataTestId={dataTestId}
      options={options}
    />
  );

  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toBeRequired();
});

jest.clearAllMocks();
