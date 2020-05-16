import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Box from '../box/box';
import Hidden from './hidden';

const dataTestId = 'hidden-component';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hidden />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('does not render component for small screen when screen size is small', () => {
  window = Object.assign(window, { innerWidth: 320 });
  const untouchedComponent = (
    <Hidden smDown>
      <Box data-testid={dataTestId}></Box>
    </Hidden>
  );

  const { queryByTestId } = render(untouchedComponent);

  expect(queryByTestId(dataTestId)).toBeNull();
});

it('renders component on small screen if it is a bigger screen', () => {
  window = Object.assign(window, { innerWidth: 320 });
  const untouchedComponent = (
    <Hidden smUp>
      <Box data-testid={dataTestId}></Box>
    </Hidden>
  );

  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId(dataTestId)).toBeDefined();
});

it('does not render component for medium screen when screen size is medium', () => {
  window = Object.assign(window, { innerWidth: 767 });
  const untouchedComponent = (
    <Hidden mdDown>
      <Box data-testid={dataTestId}></Box>
    </Hidden>
  );

  const { queryByTestId } = render(untouchedComponent);

  expect(queryByTestId(dataTestId)).toBeNull();
});

it('renders component on medium screen if it is a bigger screen', () => {
  window = Object.assign(window, { innerWidth: 767 });
  const untouchedComponent = (
    <Hidden mdUp>
      <Box data-testid={dataTestId}></Box>
    </Hidden>
  );

  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId(dataTestId)).toBeDefined();
});

it('does not render component for large screen when screen size is bigger', () => {
  window = Object.assign(window, { innerWidth: 991 });
  const untouchedComponent = (
    <Hidden lgDown>
      <Box data-testid={dataTestId}></Box>
    </Hidden>
  );

  const { queryByTestId } = render(untouchedComponent);

  expect(queryByTestId(dataTestId)).toBeNull();
});

it('renders component on medium screen if it is a bigger screen', () => {
  window = Object.assign(window, { innerWidth: 991 });
  const untouchedComponent = (
    <Hidden lgUp>
      <Box data-testid={dataTestId}></Box>
    </Hidden>
  );

  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId(dataTestId)).toBeDefined();
});

jest.clearAllMocks();
