import { storiesOf } from '@storybook/react';
import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import UploadButton from './upload-button';
import DefaultTheme from '../../theme/theme';

storiesOf('UploadButton', module)
  .add(
    'Basic',
    () => (
      <UploadButton variant="success" size="lg" acceptMultiple>
        Please select upload file
      </UploadButton>
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
