import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Modal from './modal';
import { ThemeProvider, DefaultTheme } from '../../';

const dataTestId = 'modal-content';
const dummyOnCloseFunction = () => {};
const getComponent = ({ open, handleClose, dataTestId, ...rest }) => (
  <ThemeProvider theme={DefaultTheme}>
    <Modal open={open} handleClose={handleClose} {...rest}>
      <p data-testid={dataTestId}>Modal content</p>
    </Modal>
  </ThemeProvider>
);

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const untouchedComponent = getComponent({
    open: true,
    handleClose: dummyOnCloseFunction,
    dataTestId,
  });
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays modal when open prop true is passed', () => {
  const untouchedComponent = getComponent({
    open: true,
    handleClose: dummyOnCloseFunction,
    dataTestId,
  });

  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(dataTestId)).toBeInTheDocument();
});

it("doesn't displays modal when open prop false is passed", () => {
  const untouchedComponent = getComponent({
    open: false,
    handleClose: dummyOnCloseFunction,
    dataTestId,
  });
  const { queryByTestId } = render(untouchedComponent);
  expect(queryByTestId(dataTestId)).toBeNull();
});

it('renders modal title when passed', () => {
  const title = 'Test title';
  const untouchedComponent = getComponent({
    open: true,
    handleClose: dummyOnCloseFunction,
    dataTestId,
    title,
  });

  const { getByRole } = render(untouchedComponent);
  expect(getByRole('heading')).toHaveTextContent('Test title');
});

it('renders modal title as custom component when passed', () => {
  const title = <h1>Custom modal title</h1>;
  const untouchedComponent = getComponent({
    open: true,
    handleClose: dummyOnCloseFunction,
    dataTestId,
    titleComponent: title,
  });

  const { getByRole } = render(untouchedComponent);
  expect(getByRole('heading')).toHaveTextContent('Custom modal title');
});

it('renders action button when passed', () => {
  const actionButton = 'Test';
  const untouchedComponent = getComponent({
    open: true,
    handleClose: dummyOnCloseFunction,
    dataTestId,
    actionButton,
  });

  const { getByRole } = render(untouchedComponent);
  expect(getByRole('button')).toHaveTextContent(actionButton);
});

it('renders calls action button function when passed to modal', () => {
  const actionButton = 'Action Button';
  let counter = 1;
  const actionButtonFunction = () => {
    counter = 2;
  };

  const untouchedComponent = getComponent({
    open: true,
    handleClose: dummyOnCloseFunction,
    dataTestId,
    actionButton,
    onActionButtonClick: actionButtonFunction,
  });

  const { getByText } = render(untouchedComponent);
  getByText(actionButton).click();
  expect(counter).toBe(2);
});

jest.clearAllMocks();
