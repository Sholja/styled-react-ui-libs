import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Paging from './paging';
import { wrapComponent } from '../../common/testing-helpers';

const dummyFunction = () => {};
const untouchedComponent = wrapComponent(Paging, {
  min: 1,
  max: 10,
  page: 5,
  onChange: dummyFunction,
});

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correct active page', () => {
  const active = 5;
  const untouchedComponent = wrapComponent(Paging, {
    min: 1,
    max: 10,
    page: active,
    onChange: dummyFunction,
  });
  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId(`pager-item-${active}`)).toHaveStyle(`background-color: rgb(20, 131, 195)`);
});

it('renders correct inactive page', () => {
  const active = 5;
  const untouchedComponent = wrapComponent(Paging, {
    min: 1,
    max: 10,
    page: active,
    onChange: dummyFunction,
  });
  const { getByTestId } = render(untouchedComponent);

  expect(getByTestId(`pager-item-6`)).toHaveStyle(`background-color: transparent`);
});

it('triggers onChange function if passed to the component', () => {
  const active = 5;
  const newActivePage = 6;
  let page;

  const onChange = newPage => {
    page = newPage;
  };

  const untouchedComponent = wrapComponent(Paging, { min: 1, max: 10, page: active, onChange });
  const { getByTestId } = render(untouchedComponent);
  getByTestId(`pager-item-${newActivePage}`).click();

  expect(page).toBe(newActivePage);
});

it('triggers onChange function when previous button is clicked', () => {
  const active = 5;
  let page;

  const onChange = newPage => {
    page = newPage;
  };

  const untouchedComponent = wrapComponent(Paging, { min: 1, max: 10, page: active, onChange });
  const { getByTestId } = render(untouchedComponent);
  getByTestId(`pager-previous`).click();

  expect(page).toBe(4);
});

it('triggers onChange function when next button is clicked', () => {
  const active = 5;
  let page;

  const onChange = newPage => {
    page = newPage;
  };

  const untouchedComponent = wrapComponent(Paging, { min: 1, max: 10, page: active, onChange });
  const { getByTestId } = render(untouchedComponent);
  getByTestId(`pager-next`).click();

  expect(page).toBe(6);
});

jest.clearAllMocks();
