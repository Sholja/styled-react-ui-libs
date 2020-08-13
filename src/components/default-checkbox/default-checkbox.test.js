import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DefaultCheckbox from './default-checkbox';
import { wrapComponent } from '../../common/testing-helpers';

const dataTestId = 'default-checkbox';
const dummyFunction = () => {};
const untouchedComponent = wrapComponent(DefaultCheckbox, {
  name: 'test',
  meta: { touched: false, error: '', invalid: false },
  label: 'Test radio',
  value: 'test',
  onChange: dummyFunction,
  dataTestId,
});

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders checkbox with specified label', () => {
  const { getByText } = render(untouchedComponent);
  expect(getByText('Test radio')).toBeInTheDocument();
});

it('shows error text when checkbox is invalid', () => {
  const untouchedComponent = wrapComponent(DefaultCheckbox, {
    name: 'test',
    meta: { touched: true, error: 'Input is invalid.', invalid: true },
    label: 'Test radio',
    value: 'test',
    onChange: dummyFunction,
    dataTestId,
  });

  const { getByText } = render(untouchedComponent);
  expect(getByText('Input is invalid.')).toBeInTheDocument();
});

it('renders checkbox button checked', () => {
  const untouchedComponent = wrapComponent(DefaultCheckbox, {
    name: 'test',
    meta: { touched: false, error: '', invalid: false },
    label: 'Test checkbox',
    value: 'test',
    onChange: dummyFunction,
    dataTestId,
    checked: true,
  });

  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toHaveAttribute('checked');
});

it('renders required checkbox', () => {
  const untouchedComponent = wrapComponent(DefaultCheckbox, {
    name: 'test',
    meta: { touched: false, error: '', invalid: false },
    label: 'Test radio',
    value: 'test',
    onChange: dummyFunction,
    dataTestId,
    required: true,
  });

  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toBeRequired();
});

jest.clearAllMocks();
