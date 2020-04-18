import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from './card';

const text = 'Testing card component...';
const untouchedComponent = <Card>{text}</Card>;

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

jest.clearAllMocks();
