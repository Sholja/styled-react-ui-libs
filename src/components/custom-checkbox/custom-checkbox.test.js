import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CustomCheckbox from './custom-checkbox';
import { wrapComponent } from '../../common/testing-helpers';

const dataTestId = 'custom-checkbox-container';
const untouchedComponent = wrapComponent(CustomCheckbox, {
  active: true,
  meta: { touched: false, error: '', invalid: false },
});

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders checkbox with icon, when checkbox is active', () => {
  const untouchedComponent = wrapComponent(CustomCheckbox, {
    active: true,
    meta: { touched: false, error: '', invalid: false },
    'data-testid': dataTestId,
  });
  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId('custom-checkbox')).toBeInTheDocument();
});

it('renders checkbox without icon, when checkbox is not active', () => {
  const untouchedComponent = wrapComponent(CustomCheckbox, {
    active: false,
    meta: { touched: false, error: '', invalid: false },
    'data-testid': dataTestId,
  });
  const { queryByTestId } = render(untouchedComponent);

  expect(queryByTestId('custom-checkbox')).toBeNull();
});

it('triggers onClick function if passed to the component', () => {
  let counter = 1;
  const onClick = () => {
    counter = 2;
  };

  const untouchedComponent = wrapComponent(CustomCheckbox, {
    active: false,
    meta: { touched: false, error: '', invalid: false },
    'data-testid': dataTestId,
    onClick,
  });

  const { getByTestId } = render(untouchedComponent);
  getByTestId(dataTestId).click();

  expect(counter).toBe(2);
});

jest.clearAllMocks();
