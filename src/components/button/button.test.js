import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './button';
import { wrapComponent } from '../../common/testing-helpers';

const text = 'Testing Button component...';
const dataTestId = 'button-component';
const untouchedComponent = wrapComponent(Button, { children: text });

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

it('triggers onClick function passed to the button once button is clicked', () => {
  let number = 0;

  const changeNumber = () => {
    number = 4;
  };

  const untouchedComponent = wrapComponent(Button, { children: text, onClick: changeNumber, dataTestId });

  const { getByTestId } = render(untouchedComponent);
  getByTestId(dataTestId).click();

  expect(number).toBe(4);
});

jest.clearAllMocks();
