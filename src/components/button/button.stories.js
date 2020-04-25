import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import Button from './button';
import CodeSnippet from '../code-snippet/code-snippet';
import DefaultTheme from '../../theme/theme';

const sizes = ['sm', 'md', 'lg'];
const variants = [
  'primary',
  'primaryOutline',
  'secondary',
  'secondaryOutline',
  'danger',
  'dangerOutline',
  'success',
  'successOutline',
];

storiesOf('Button', module)
  .add('Basic', () => (
    <>
      <Button
        btnSize={select('Sizes', sizes, sizes[1])}
        variant={select('Variant', variants, variants[0])}
        disabled={boolean('Disabled', false)}
      >
        Button
      </Button>
      <CodeSnippet>
        {`
          <Button
            btnSize="md"
            variant="success"
            disabled="false"
            showLoader="true"
            loaderSize="12px"
            hideContentWhileLoading>
            This is a Button
          </Button>
          `}
      </CodeSnippet>
    </>
  ))
  .add('Button with loader', () => (
    <Button
      btnSize={select('Sizes', sizes, sizes[1])}
      variant={select('Variant', variants, variants[0])}
      disabled={boolean('Disabled', false)}
      loaderColor={DefaultTheme.colors.white}
      showLoader
      hideContentWhileLoading={boolean('Hide contents while loading?', false)}
    >
      Button
    </Button>
  ));
