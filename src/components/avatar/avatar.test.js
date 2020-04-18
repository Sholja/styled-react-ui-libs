import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Avatar from './avatar';
import logo from '../../assets/mop-logo.jpg';

const dataTestId = 'image';

afterEach(cleanup);

const untouchedComponent = <Avatar src={logo} dataTestId={dataTestId} alt="Avatar" />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders image tag with specified alt attribute', () => {
  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId(dataTestId)).toHaveAttribute('alt', 'Avatar');
});

jest.clearAllMocks();
