import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Iframe from './iframe';

const untouchedComponent = <Iframe title="Title Test" src="https://www.instagram.com/p/CAo8KYennQ0/embed" dataTestId="styled-iframe-component" />;

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

jest.clearAllMocks();
