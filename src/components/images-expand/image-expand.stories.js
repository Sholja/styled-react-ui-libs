import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';
import React from 'react';

import ImageExpand from './images-expand';
import CodeSnippet from '../code-snippet/code-snippet';

const items = [
  'https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/f-ogo_RGB_HEX-58.png',
  'https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/In-2C-54px-R.png',
  'https://mk0hootsuiteblof6bud.kinstacdn.com/wp-content/uploads/2018/09/badgeRGB-150x150.png',
  'https://mk0hootsuiteblof6bud.kinstacdn.com/wp-content/uploads/2018/09/snap-ghost-yellow-310x309.png',
  'https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/WhatsApp_Logo_2-150x150.png',
];

storiesOf('ImageExpand', module).add(
  'Basic',
  () => (
    <>
      <ImageExpand
        items={items}
        withBorder={boolean('With border around images', true)}
        displayAll={boolean('Display all images at once', false)}
        maxDisplay={number('Max elements to display at once', 3)}
        width={number('Image width', 32)}
        height={number('Image height', 32)}
        imageSpace={number('Space between images', -12)}
      />
      <CodeSnippet>{`<ImageExpand items={items} withBorder />`}</CodeSnippet>
    </>
  ),
  {
    notes:
      'ImageExpand component is used to display images next to each other, with an option to expand all images. See other options in the knobs of the storybook.',
  },
);
