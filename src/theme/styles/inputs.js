import { borders } from './borders';
import { radii } from './radii';
import { space } from './space';
import colors from './colors';
import { shadows } from './box-shadows';
import { fontSizes } from './font-sizes';

export const inputTypes = {
  shadow: {
    border: borders[0],
    borderRadius: radii.md,
    boxShadow: shadows.box,
    '&::placeholder': {
      color: colors.greys[400],
    },
    '&:focus': {
      outline: 'none',
      borderColor: colors.greys[400],
      boxShadow: shadows.focus,
    },
    '&:disabled': {
      opacity: 0.25,
      backgroundColor: colors.greys[400],
    },
  },
  default: {
    border: borders[1],
    borderColor: colors.greys[300],
    boxShadow: shadows.none,
    '&::placeholder': {
      color: colors.greys[400],
    },
    '&:hover': {
      borderColor: colors.greys[600],
    },
    '&:focus': {
      outline: 'none',
      borderColor: colors.primary,
      boxShadow: shadows.inputFocus,
    },
    '&:disabled': {
      opacity: 0.25,
      backgroundColor: colors.greys[400],
    },
  },
  error: {
    border: borders[1],
    borderColor: colors.reds[500],
    boxShadow: shadows.none,
    '&::placeholder': {
      color: colors.greys[400],
    },
    '&:hover': {
      borderColor: colors.reds[300],
    },
    '&:focus': {
      outline: 'none',
      borderColor: colors.reds[300],
      boxShadow: shadows.inputFocus,
    },
    '&:disabled': {
      opacity: 0.25,
      backgroundColor: colors.greys[400],
    },
  },
  errorAndComponent: {
    border: borders[1],
    borderColor: colors.reds[500],
    boxShadow: shadows.none,
    margin: `${space['0']}px`,
    '&::placeholder': {
      color: colors.greys[400],
    },
    '&:hover': {
      borderColor: colors.reds[300],
    },
    '&:focus': {
      outline: 'none',
      borderColor: colors.reds[300],
      boxShadow: shadows.inputFocus,
    },
    '&:disabled': {
      opacity: 0.25,
      backgroundColor: colors.greys[400],
    },
  },
  stripped: {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: `${borders[1]} ${colors.inputs.strippedBorder}`,
    borderRadius: '0px',
  },
  strippedWithError: {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: `${borders[1]} ${colors.oranges[1100]}`,
  },
};

export const inputSizes = {
  sm: {
    fontSize: fontSizes.sm,
    padding: `${space.sm / 2}px ${space.sm}px`,
    borderRadius: radii.sm,
  },
  md: {
    fontSize: fontSizes.base,
    padding: `${space.sm}px ${space.md}px`,
    borderRadius: radii.md,
  },
  lg: {
    fontSize: fontSizes.lg,
    padding: `${space.sm}px ${space.md}px`,
    borderRadius: radii.md,
  },
};
