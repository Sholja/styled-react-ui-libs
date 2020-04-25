import { storiesOf } from '@storybook/react';
import React from 'react';
import { select } from '@storybook/addon-knobs';

import Loader from './loader';
import CodeSnippet from '../code-snippet/code-snippet';
import DefaultTheme from '../../theme/theme';

const sizes = {
  '60px': '60px',
  '80px': '80px',
  '100px': '100px',
  '120px': '120px',
};

const thickness = {
  '6px': '6px',
  '8px': '8px',
  '10px': '10px',
  '12px': '12px',
  '16px': '16px',
};

const colorStyles = [
  DefaultTheme.colors.greys[1300],
  DefaultTheme.colors.primary,
  DefaultTheme.colors.warning,
  DefaultTheme.colors.success,
  DefaultTheme.colors.danger,
];

const spinSpeeds = {
  '2 sec': '2',
  '4 sec': '4',
  '6 sec': '6',
  '8 sec': '8',
  '10 sec': '10',
};

storiesOf('Loader', module).add(
  'Basic',
  () => (
    <>
      <Loader
        size={select('Loader Size', sizes, sizes['100px'])}
        thick={select('Loader Thickness', thickness, thickness['16px'])}
        trailColor={select('Loader Trail Color', colorStyles, colorStyles[0])}
        loaderColor={select('Loader Color', colorStyles, colorStyles[1])}
        spinSpeed={select('Loader Spin Speed', spinSpeeds, spinSpeeds[0])}
      />
      <CodeSnippet>
        {`
        <Loader
          size="100px"
          thick="16px"
          trailColor="#FFF"
          loaderColor="#000"
          spinSpeed={2}
        />`}
      </CodeSnippet>
    </>
  ),
  {
    notes: `Customisable loader. You can specify "trail" color, "loaderColor" etc.`,
  },
);
