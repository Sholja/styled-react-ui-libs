import { storiesOf } from '@storybook/react';
import React from 'react';
import { number } from '@storybook/addon-knobs';

import Hidden from './hidden';
import CodeSnippet from '../code-snippet/code-snippet';

storiesOf('Hidden', module)
  .add(
    'Display heading with Hidden component',
    () => (
      <>
        <Hidden mdDown>
          <h2>Render with Hidden component, lower the screen size and this will be hidden</h2>
        </Hidden>
        <CodeSnippet>
          {`
          <Hidden mdDown>
            <h1>Render with Hidden component, lower the screen size and this will be hidden</h1>
          </Hidden>`}
        </CodeSnippet>
      </>
    ),
    {
      notes:
        'Hidden is a component which can be used to hide part of the app on a different screen sizes. The component is expecting boolean props for size of the screen. In this case, prop "mdDown" is passed so everything inside Hidden component will be hidden on middle screens an below (check DefaultTheme for breakpointsPixels).',
    },
  )
  .add(
    'Play around with size to hide',
    () => (
      <>
        <Hidden sizeDown={number('Size down', 1000)}>
          <h2>
            Render with Hidden component, enter the screen size under which component will be hidden
          </h2>
        </Hidden>
      </>
    ),
    {
      notes:
        'Hidden component can accept two more props and that is "sizeUp" and "sizeDown". These are number props and it will expects the number of pixel to determine where component will be hidden. In this example, "sizeDown" is used.',
    },
  );
