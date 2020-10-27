import { darken, lighten } from 'polished';

import colors from './colors';
import { borders } from './borders';
import { fontSizes } from './font-sizes';
import { space } from './space';
import { fontWeights } from './font-weights';

const DARKEN_AMOUNT = 0.1;

export const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.primary,
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${lighten(DARKEN_AMOUNT, colors.primary)} !important`,
    },
  },
  primaryOutline: {
    backgroundColor: colors.white,
    color: colors.primary,
    boxShadow: `0 0 0 1px ${colors.primary}`,
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${colors.primary} !important`,
    },
  },
  primaryInverse: {
    color: colors.primary,
    backgroundColor: colors.white,
    ':hover': {
      color: `${colors.primary} !important`,
      backgroundColor: `${colors.white} !important`,
    },
  },

  secondary: {
    color: colors.white,
    backgroundColor: colors.grey,
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${lighten(DARKEN_AMOUNT, colors.grey)} !important`,
    },
  },
  secondaryOutline: {
    backgroundColor: colors.white,
    color: colors.greys[2200],
    border: `${borders[1]}${colors.greys[2200]}`,
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${colors.greys[2200]} !important`,
    },
  },

  warning: {
    color: colors.white,
    backgroundColor: colors.warning,
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${darken(DARKEN_AMOUNT, colors.warning)} !important`,
    },
  },
  warningOutline: {
    backgroundColor: colors.white,
    color: colors.warning,
    boxShadow: `0 0 0 1px ${colors.warning}`,
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${colors.warning} !important`,
    },
  },

  danger: {
    color: colors.white,
    backgroundColor: colors.danger,
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${darken(DARKEN_AMOUNT, colors.danger)} !important`,
    },
  },
  dangerOutline: {
    backgroundColor: colors.white,
    color: colors.danger,
    boxShadow: `0 0 0 1px ${colors.danger}`,
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${colors.danger} !important`,
    },
  },

  success: {
    color: colors.white,
    backgroundColor: colors.success,
    borderColor: colors.success,
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${lighten(DARKEN_AMOUNT, colors.success)} !important`,
    },
  },
  successOutline: {
    backgroundColor: colors.white,
    color: colors.success,
    boxShadow: `0 0 0 1px ${colors.success}`,
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${colors.success} !important`,
    },
  },

  default: {
    backgroundColor: colors.greys[2500],
    color: colors.greys[2200],
    ':hover': {
      color: `${colors.white} !important`,
      backgroundColor: `${lighten(DARKEN_AMOUNT, colors.grey)} !important`,
    },
  },

  transparent: {
    backgroundColor: colors.transparent,
    color: colors.primary,
    fontWeight: fontWeights.bold,
  },

  closeModal: {
    color: colors.black,
    backgroundColor: 'transparent',
    borderColor: 'none',
    lineHeight: 0,
    fontSize: `${fontSizes.xxl}px !important`,
    padding: '0 !important',
    ':hover': {
      color: `${lighten(DARKEN_AMOUNT, colors.grey)} !important`,
    },
  },

  closeStickyCard: {
    color: lighten(DARKEN_AMOUNT, colors.grey),
    backgroundColor: 'transparent',
    borderColor: 'none',
    lineHeight: 0,
    fontSize: `${fontSizes.xl}px !important`,
    fontWeight: '100',
    padding: '0 !important',
    ':hover': {
      color: `${colors.black} !important`,
    },
  },
};

export const buttonSizes = {
  sm: {
    fontSize: fontSizes.xs,
    padding: `${space.xxs}px ${space.sm}px`,
  },
  md: {
    fontSize: fontSizes.xs,
    padding: `${space.sm}px ${space.lg}px`,
  },
  lg: {
    fontSize: fontSizes.xs,
    padding: `${space.md}px ${space.xl}px`,
  },
};
