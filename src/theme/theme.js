import { inputTypes, inputSizes } from './styles/inputs';
import { radii } from './styles/radii';
import { borders } from './styles/borders';
import { fonts } from './styles/fonts';
import { shadows } from './styles/box-shadows';
import { buttons, buttonSizes } from './styles/buttons';
import { fontSizes } from './styles/font-sizes';
import { space } from './styles/space';
import colors from './styles/colors';
import letterSpacings from './styles/letter-spacings';
import { lineHeights } from './styles/line-heights';
import { linkStyles } from './styles/link-styles';
import { fontWeights } from './styles/font-weights';
import colorStyles from './styles/color-styles';
import { headingSizes } from './styles/heading-sizes';
import { alerts } from './styles/alerts';

export default {
  alerts,
  borders,
  buttons,
  buttonSizes,
  colors,
  colorStyles,
  fonts,
  fontWeights,
  fontSizes,
  headingSizes,
  inputSizes,
  inputTypes,
  lineHeights,
  radii,
  linkStyles,
  letterSpacings,
  space,
  shadows,
  // eslint-disable-next-line no-magic-numbers
  width: [16, 32, 64, 128, 256],
  breakpoints: ['40em', '52em', '64em', '80em'],
};
