import React from 'react';

import { ThemeProvider, DefaultTheme } from '../index';

export const wrapComponent = (Component, props = {}) => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Component {...props} />
    </ThemeProvider>
  );
};
