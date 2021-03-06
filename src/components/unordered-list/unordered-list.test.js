import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UnorderedList from './unordered-list';
import { wrapComponent } from '../../common/testing-helpers';

const options = ['First option', 'Second option', 'Third option'];
const untouchedComponent = wrapComponent(UnorderedList, { options });

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('handles onClick event on options', () => {
  let value = '';

  const onClick = item => {
    value = item;
  };

  const untouchedComponent = wrapComponent(UnorderedList, { options, onClick });
  const { getByText } = render(untouchedComponent);
  getByText(options[0]).click();

  expect(value).toBe(options[0]);
});

jest.clearAllMocks();
