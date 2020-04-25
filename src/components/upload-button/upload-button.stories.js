import { storiesOf } from '@storybook/react';
import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import UploadButton from './upload-button';
import CodeSnippet from '../code-snippet/code-snippet';
import DefaultTheme from '../../theme/theme';

storiesOf('UploadButton', module)
  .add(
    'Basic',
    () => (
      <>
        <UploadButton variant="success" size="lg" acceptMultiple>
          Please select upload file
        </UploadButton>
        <CodeSnippet>
          {`
            <UploadButton variant="success" 
              size="lg" 
              acceptMultiple 
              acceptFileTypes="application/pdf"
              showLoader="true"
              loaderSize="12px"
              hideContentWhileLoading>
              Please select upload file
            </UploadButton>`}
        </CodeSnippet>
      </>
    ),
    {
      notes: `Button for uploading file(s)`,
    },
  )
  .add(
    'With accept file types',
    () => (
      <UploadButton acceptFileTypes="application/pdf" variant="danger" size="lg">
        Only PDF files
      </UploadButton>
    ),
    {
      notes: `This upload only accepts PDF files`,
    },
  )
  .add(
    'With loader',
    () => (
      <UploadButton
        acceptFileTypes="application/pdf"
        size="lg"
        loaderColor={DefaultTheme.colors.white}
        showLoader
        hideContentWhileLoading={boolean('Hide contents while loading?', false)}
      >
        Upload button with loader
      </UploadButton>
    ),
    {
      notes: `This upload only accepts PDF files`,
    },
  );
