import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DefaultSelect from './default-select';
import { wrapComponent } from '../../common/testing-helpers';

const dataTestId = 'default-select';
const dummyFunction = () => {};

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

const untouchedComponent = wrapComponent(DefaultSelect, {
  name: 'test',
  meta: { touched: false, error: '', invalid: false },
  value: 1,
  label: 'Test input',
  onChange: dummyFunction,
  dataTestId,
  options,
});

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders select with specified label', () => {
  const { getByText } = render(untouchedComponent);
  expect(getByText('Test input')).toBeInTheDocument();
});

it('shows error text when select is invalid', () => {
  const untouchedComponent = wrapComponent(DefaultSelect, {
    name: 'test',
    meta: { touched: true, error: 'Input is invalid.', invalid: true },
    value: 1,
    label: 'Test input',
    onChange: dummyFunction,
    dataTestId,
    options,
  });

  const { getByText } = render(untouchedComponent);
  expect(getByText('Input is invalid.')).toBeInTheDocument();
});

it('renders select with specified value', () => {
  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toHaveValue('1');
});

jest.clearAllMocks();
