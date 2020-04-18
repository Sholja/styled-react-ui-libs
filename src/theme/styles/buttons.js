import { darken, lighten } from 'polished';

import colors from './colors';
import { fontSizes } from './font-sizes';
import { space } from './space';

const DARKEN_AMOUNT = 0.1;

export const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.primary,
    '&:hover': {
      color: colors.white,
      backgroundColor: lighten(DARKEN_AMOUNT, colors.primary),
    },
  },
  primaryOutline: {
    backgroundColor: colors.white,
    color: colors.primary,
    boxShadow: `0 0 0 1px ${colors.primary}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.primary,
    },
  },
  primaryInverse: {
    color: colors.primary,
    backgroundColor: colors.white,
    '&:hover': {
      color: colors.primary,
      backgroundColor: colors.white,
    },
  },

  secondary: {
    color: colors.white,
    backgroundColor: colors.grey,
    '&:hover': {
      color: colors.white,
      backgroundColor: lighten(DARKEN_AMOUNT, colors.grey),
    },
  },
  secondaryOutline: {
    backgroundColor: colors.white,
    color: colors.grey,
    boxShadow: `0 0 0 1px ${colors.grey}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.grey,
    },
  },

  warning: {
    color: colors.white,
    backgroundColor: colors.warning,
    '&:hover': {
      color: colors.white,
      backgroundColor: darken(DARKEN_AMOUNT, colors.warning),
    },
  },
  warningOutline: {
    backgroundColor: colors.white,
    color: colors.warning,
    boxShadow: `0 0 0 1px ${colors.warning}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.warning,
    },
  },

  danger: {
    color: colors.white,
    backgroundColor: colors.danger,
    '&:hover': {
      color: colors.white,
      backgroundColor: darken(DARKEN_AMOUNT, colors.danger),
    },
  },
  dangerOutline: {
    backgroundColor: colors.white,
    color: colors.danger,
    boxShadow: `0 0 0 1px ${colors.danger}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.danger,
    },
  },

  success: {
    color: colors.white,
    backgroundColor: colors.success,
    borderColor: colors.success,
    '&:hover': {
      color: colors.white,
      backgroundColor: lighten(DARKEN_AMOUNT, colors.success),
    },
  },
  successOutline: {
    backgroundColor: colors.white,
    color: colors.success,
    boxShadow: `0 0 0 1px ${colors.success}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.success,
    },
  },

  closeModal: {
    color: colors.black,
    backgroundColor: 'transparent',
    borderColor: 'none',
    lineHeight: 0,
    fontSize: `${fontSizes.xxl}px !important`,
    padding: '0 !important',
    '&:hover': {
      color: lighten(DARKEN_AMOUNT, colors.grey),
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
    '&:hover': {
      color: colors.black,
    },
  },
};

export const buttonSizes = {
  sm: {
    fontSize: fontSizes.xs,
    padding: `${space.xxs}px ${space.sm}px`,
  },
  md: {
    fontSize: fontSizes.base,
    padding: `${space.sm}px ${space.lg}px`,
  },
  lg: {
    fontSize: fontSizes.lg,
    padding: `${space.md}px ${space.xl}px`,
  },
};
