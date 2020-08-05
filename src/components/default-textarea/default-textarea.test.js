import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DefaultTextarea from './default-textarea';
import { wrapComponent } from '../../common/testing-helpers';

const dataTestId = 'default-textarea';
const untouchedComponent = wrapComponent(DefaultTextarea, {
  name: 'test',
  meta: { touched: false, error: '', invalid: false },
  label: 'Test input',
  dataTestId,
  value: 'test',
});

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders input with specified label', () => {
  const { getByText } = render(untouchedComponent);
  expect(getByText('Test input')).toBeInTheDocument();
});

it('shows error text when input is invalid', () => {
  const untouchedComponent = wrapComponent(DefaultTextarea, {
    name: 'test',
    meta: { touched: true, error: 'Input is invalid.', invalid: true },
    label: 'Test input',
    dataTestId,
  });
  const { getByText } = render(untouchedComponent);
  expect(getByText('Input is invalid.')).toBeInTheDocument();
});

it('renders input with specified value', () => {
  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toHaveValue('test');
});

jest.clearAllMocks();
