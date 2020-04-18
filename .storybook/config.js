import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider, DefaultTheme } from '../src/index';
import storybookTheme from './storybookTheme';
addParameters({ options: { theme: storybookTheme } });

let fs = null;
let path = null;

if (process.env.NODE_ENV === 'test') {
  fs = require('fs');
  path = require('path');
}

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function requireContextTestEnv(
  base = '.',
  scanSubDirectories = false,
  regularExpression = /\.js$/,
) {
  const files = {};
  function readDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
      const fullPath = path.resolve(directory, file);
      if (fs.statSync(fullPath).isDirectory()) {
        if (scanSubDirectories) readDirectory(fullPath);
        return;
      }
      if (!regularExpression.test(fullPath)) return;
      files[fullPath] = true;
    });
  }
  readDirectory(path.resolve(__dirname, base));
  function Module(file) {
    return require(file);
  }
  Module.keys = () => Object.keys(files);
  return Module;
}

function loadStories() {
  if (process.env.NODE_ENV === 'test' && typeof require.context === 'undefined') {
    requireAll(requireContextTestEnv('../src', true, /.stories.js$/));
  } else {
    requireAll(require.context('../src', true, /.stories.js$/));
  }
}

const StyledSystemWrapper = storyFn => (
  <ThemeProvider theme={DefaultTheme}>
    <div
      style={{
        background: '#fff',
        maxWidth: '95vw',
        minHeight: '95vh',
        margin: '2.5vh auto',
        padding: '5%',
      }}
    >
      {storyFn()}
    </div>
  </ThemeProvider>
);
addDecorator(StyledSystemWrapper);

addDecorator(withKnobs);
configure(loadStories, module);
configureViewport();
