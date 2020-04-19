/* eslint-disable import/no-extraneous-dependencies  */
import svg from 'rollup-plugin-svg';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';

import pkg from './package.json';

const extensions = ['.js', '.jsx'];

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve({ extensions }),
    babel({
      exclude: 'node_modules/**',
      include: ['src/**/*'],
      extensions,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType'],
      },
    }),
    svg(),
    css({ output: './dist/styles.css' }),
  ],
};
