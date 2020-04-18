import colors from './colors';

export const linkStyles = {
  default: {
    color: colors.primary,
    '&:hover': {
      color: colors.blues[600],
    },
  },
  text: {
    color: colors.text,
    '&:hover': {
      color: colors.primary,
    },
  },
  button: {
    color: colors.white,
    '&:hover': {
      color: colors.white,
    },
  },
  navlink: {
    color: colors.white,
    '&:after, &:before': {
      display: 'block',
      position: 'absolute',
      content: `''`,
      bottom: '-4px',
      width: '0',
      height: 1,
      backgroundColor: colors.white,
      transition: '0.3s ease',
    },
    '&:before': {
      right: '50%',
    },
    '&:after': {
      left: '50%',
    },
    '&:hover': {
      color: colors.white,
      '&:before, &:after': {
        width: '50%',
      },
    },
  },
  userMenu: {
    color: colors.primary,
    '&:hover': {
      color: colors.black,
    },
  },
  mobileMenuSecondary: {
    color: colors.greys['500'],
    '&:hover': {
      color: colors.greys['600'],
    },
  },
  plain: {
    color: '',
    '&:hover': {
      color: '',
    },
  },
};
