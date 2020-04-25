import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import React from 'react';

import Image from './image';
import CodeSnippet from '../code-snippet/code-snippet';

const image =
  'https://res.cloudinary.com/sholja/image/upload/v1534706710/images/y7nuc4np0pawkcxhu9gx.jpg';

const sizes = {
  '20px': '20px',
  '50px': '50px',
  '100px': '100px',
  '200px': '200px',
  '300px': '300px',
  '100%': '100%',
};

storiesOf('Image', module).add(
  'Basic',
  () => (
    <>
      <Image src={image} alt="Logo" width={select('Width', sizes, sizes['100px'], 'General')} />
      <CodeSnippet>
        {`
          <Image
            src="https://res.cloudinary.com/sholja/image/upload/v1534706710/images/y7nuc4np0pawkcxhu9gx.jpg"
            alt="Logo"
            width="100px"
          />`}
      </CodeSnippet>
    </>
  ),
  {
    notes: 'Renders image tag. Props "src" and "alt" are required.',
  },
);
