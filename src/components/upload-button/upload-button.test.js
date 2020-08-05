import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UploadButton from './upload-button';
import { wrapComponent } from '../../common/testing-helpers';

const text = 'Testing upload component...';
const inputTestId = 'upload-button-input';

afterEach(cleanup);

it('renders without crashing', () => {
  const untouchedComponent = wrapComponent(UploadButton, { children: text });
  const div = document.createElement('div');
  ReactDOM.render(untouchedComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders component with specified text', () => {
  const untouchedComponent = wrapComponent(UploadButton, { children: text });
  const { getByText } = render(untouchedComponent);
  expect(getByText(text)).toBeDefined();
});

it('renders component with multiple attribute', () => {
  const untouchedComponent = wrapComponent(UploadButton, { children: text, inputTestId, acceptMultiple: true });
  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(inputTestId)).toHaveAttribute('multiple', '');
});

it('renders component with correct accept attribute', () => {
  const acceptedFileTypes = 'image/png';
  const untouchedComponent = wrapComponent(UploadButton, { children: text, inputTestId, acceptFileTypes: acceptedFileTypes });
  const { getByTestId } = render(untouchedComponent);
  expect(getByTestId(inputTestId)).toHaveAttribute('accept', acceptedFileTypes);
});

it('triggers onChange with multiple files selected', () => {
  let files = [];
  const onChange = passedFiles => {
    files = passedFiles;
  };

  const untouchedComponent = wrapComponent(UploadButton, { children: text, inputTestId, acceptMultiple: true, onChange });

  const { getByTestId } = render(untouchedComponent);
  fireEvent.change(getByTestId(inputTestId), {
    target: {
      files: [
        new File([''], 'filename', { type: 'image/png' }),
        new File([''], 'filename2', { type: 'image/jpeg' }),
      ],
    },
  });

  expect(files.length).toBe(2);
});

it('triggers onChange with multiple files selected but only one sent (due to "acceptMultiple" not passed)', () => {
  let files = [];

  const onChange = passedFiles => {
    files = passedFiles;
  };

  const untouchedComponent = wrapComponent(UploadButton, { children: text, inputTestId, onChange });

  const { getByTestId } = render(untouchedComponent);
  fireEvent.change(getByTestId(inputTestId), {
    target: {
      files: [
        new File([''], 'filename', { type: 'image/png' }),
        new File([''], 'filename2', { type: 'image/jpeg' }),
      ],
    },
  });

  expect(files.length).toBe(1);
});

jest.clearAllMocks();
