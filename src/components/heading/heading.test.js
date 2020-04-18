import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Heading from './heading';

const text = 'Testing heading component...';
const untouchedComponent = <Heading as="h5">{text}</Heading>;

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

it('renders correct component', () => {
  const { getByRole } = render(untouchedComponent);
  expect(getByRole('heading')).toBeDefined();
});

jest.clearAllMocks();
