import { storiesOf } from '@storybook/react';
import React from 'react';
import { select } from '@storybook/addon-knobs';

import Footer from './footer';
import CodeSnippet from '../code-snippet/code-snippet';
import Text from '../text/text';
import DefaultTheme from '../../theme/theme';

const heights = {
  '60px': '60px',
  '80px': '80px',
  '100px': '100px',
  '120px': '120px',
};

const colorStyles = [
  DefaultTheme.colors.white,
  DefaultTheme.colors.primary,
  DefaultTheme.colors.warning,
  DefaultTheme.colors.success,
  DefaultTheme.colors.danger,
];

storiesOf('Footer', module).add(
  'Basic',
  () => (
    <>
    <Footer
      height={select('Height', heights, heights['100px'])}
      backgroundColor={select('Colors', colorStyles, colorStyles[0])}
      isFloatingFooter
    >
      <Text>First item in footer</Text>
      <Text ml={DefaultTheme.space.md}>Second item in footer</Text>
    </Footer>
    <CodeSnippet>
      {`
        <Footer height="110px"
          backgroundColor="#FFF"
          isFloatingFooter>
        </Footer>`}
    </CodeSnippet>
    </>
  ),
  {
    notes: `Footer component which will be always fixed to the bottom of the page.`,
  },
);
