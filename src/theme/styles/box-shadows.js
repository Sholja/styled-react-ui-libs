/* eslint-disable no-magic-numbers */
import { rgba } from 'polished';

import colors from './colors';

export const shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0,0,0,0.1)',
  md: '0 0 4px rgba(0,0,0,0.25)',
  lg: '0 0 6px rgba(0,0,0,0.25)',
  inset: 'inset 0 0px 2px rgba(0,0,0,0.05)',
  box: `
  rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
  rgba(0, 0, 0, 0.3) 0px 1px 3px -1px
  `,
  focus: `
    ${rgba(colors.black, 0.5)} 0px 2px 5px -1px,
    ${rgba(colors.black, 0.15)} 0px 2px 1px -2px
  `,
  inputFocus: `${colors.primary} 0 0 0 1px`,
};
/* eslint-enable no-magic-numbers */
