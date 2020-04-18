import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Image from './image';
import logo from '../../assets/mop-logo.jpg';

const dataTestId = 'image';

afterEach(cleanup);

const untouchedComponent = <Image src={logo} data-testid={dataTestId} alt="Logo" />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders image tag with specified alt attribute', () => {
  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId(dataTestId)).toHaveAttribute('alt', 'Logo');
});

jest.clearAllMocks();
