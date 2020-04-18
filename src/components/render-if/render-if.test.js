import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RenderIf from './render-if';

const dataTestId = 'render-if';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RenderIf show={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders null if show prop is false', () => {
  const untouchedComponent = (
    <RenderIf show={false}>
      <p data-testid={dataTestId}>Render something in component</p>
    </RenderIf>
  );

  const { queryByTestId } = render(untouchedComponent);

  expect(queryByTestId(dataTestId)).toBeNull();
});

it('renders component if show prop is true', () => {
  const untouchedComponent = (
    <RenderIf show={true}>
      <p data-testid={dataTestId}>Render something in component</p>
    </RenderIf>
  );

  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId(dataTestId)).toBeInTheDocument();
});

jest.clearAllMocks();
