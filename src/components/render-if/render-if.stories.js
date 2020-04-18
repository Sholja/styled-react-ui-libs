import { storiesOf } from '@storybook/react';
import React from 'react';

import RenderIf from './render-if';

storiesOf('RenderIf', module).add(
  'Display heading with RenderIf component',
  () => (
    <RenderIf show={true}>
      <h1>Render with RenderIf component</h1>
    </RenderIf>
  ),
  {
    notes:
      'RenderIf is a simple component for displaying some content based on boolean. If prop open is passed as true, content of RenderIf component will be displayed, if boolean is false, RenderIf component will return null.',
  },
);
