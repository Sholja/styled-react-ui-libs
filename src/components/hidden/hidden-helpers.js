import DefaultTheme from '../../theme/theme';

export const isHidden = (
  screenWidth,
  sizeUp,
  sizeDown,
  smDown,
  smUp,
  mdDown,
  mdUp,
  lgDown,
  lgUp,
  xlDown,
  xlUp,
) => {
  if (sizeUp || sizeDown) {
    if (sizeUp) {
      return screenWidth > sizeUp;
    }

    if (sizeDown) {
      return screenWidth < sizeDown;
    }
  }

  if (smDown) {
    return screenWidth < DefaultTheme.breakpointsPixels.sm;
  }

  if (smUp) {
    return screenWidth > DefaultTheme.breakpointsPixels.sm;
  }

  if (mdDown) {
    return screenWidth < DefaultTheme.breakpointsPixels.md;
  }

  if (mdUp) {
    return screenWidth > DefaultTheme.breakpointsPixels.md;
  }

  if (lgDown) {
    return screenWidth < DefaultTheme.breakpointsPixels.lg;
  }

  if (lgUp) {
    return screenWidth > DefaultTheme.breakpointsPixels.lg;
  }

  if (xlDown) {
    return screenWidth < DefaultTheme.breakpointsPixels.xl;
  }

  if (xlUp) {
    return screenWidth > DefaultTheme.breakpointsPixels.xl;
  }
};
