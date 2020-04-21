import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loader from './loader';

const untouchedComponent = <Loader />;

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

jest.clearAllMocks();
