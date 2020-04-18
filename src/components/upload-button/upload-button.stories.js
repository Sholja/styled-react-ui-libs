import { storiesOf } from '@storybook/react';
import React from 'react';

import UploadButton from './upload-button';

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
  );
