import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Hyperlink from './hyperlink';
import { wrapComponent } from '../../common/testing-helpers';

const text = 'Testing text component...';
const dataTestId = 'text-component';
const untouchedComponent = wrapComponent(Hyperlink, {
  'data-testid': dataTestId,
  href: 'https://google.com',
  children: text,
});

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders component with specified text', () => {
  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toHaveTextContent(text);
});

it('renders component with specified href attribute', () => {
  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toHaveAttribute('href', 'https://google.com');
});

it('triggers onClick function if passed to the component', () => {
  let counter = 1;
  const onClick = () => {
    counter = 2;
  };

  const untouchedComponent = wrapComponent(Hyperlink, {
    'data-testid': dataTestId,
    href: '#',
    children: text,
    onClick,
  });

  const { getByTestId } = render(untouchedComponent);
  getByTestId(dataTestId).click();

  expect(counter).toBe(2);
});

jest.clearAllMocks();
