import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import React from 'react';

import Avatar from './avatar';
import CodeSnippet from '../code-snippet/code-snippet';

const image = 'https://res.cloudinary.com/sholja/image/upload/v1534706710/images/y7nuc4np0pawkcxhu9gx.jpg';

storiesOf('Avatar', module).add(
  'Basic',
  () => (
    <>
      <Avatar
        src={image}
        alt="Logo"
        width={text('Avatar width', '50px')}
        height={text('Avatar height', undefined)}
      />
      <CodeSnippet>
        {`
          <Avatar
            src="https://res.cloudinary.com/sholja/image/upload/v1534706710/images/y7nuc4np0pawkcxhu9gx.jpg"
            alt="Logo"
            width="40px"
            height="40px"
          />
          `}
      </CodeSnippet>
    </>
  ),
  {
    notes: 'Component used for displaying avatar.',
  },
);
