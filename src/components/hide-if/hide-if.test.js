import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HideIf from './hide-if';

const dataTestId = 'hide-if';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HideIf show={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders null if hide prop is true', () => {
  const untouchedComponent = (
    <HideIf hide={true}>
      <p data-testid={dataTestId}>Render something in component</p>
    </HideIf>
  );HideIf

  const { queryByTestId } = render(untouchedComponent);

  expect(queryByTestId(dataTestId)).toBeNull();
});

it('renders component if hide prop is false', () => {
  const untouchedComponent = (
    <HideIf hide={false}>
      <p data-testid={dataTestId}>Render something in component</p>
    </HideIf>
  );

  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId(dataTestId)).toBeInTheDocument();
});

jest.clearAllMocks();
