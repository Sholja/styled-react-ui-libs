import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

import Box from '../box/box';
import { LOADER_OPTIONS } from '../../common/constants';
import { injectStyle } from '../../common/helpers';

const Loader = ({
  style = {},
  size = LOADER_OPTIONS.size,
  thick = LOADER_OPTIONS.thick,
  trailColor = LOADER_OPTIONS.trailColor,
  loaderColor = LOADER_OPTIONS.loaderColor,
  spinSpeed = LOADER_OPTIONS.spinSpeed,
  ...rest
}) => {
  const keyframesStyle = `
    @-webkit-keyframes spin-loader {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }`;

  const loaderStyles = {
    WebkitAnimation: `spin-loader ${spinSpeed}s linear infinite`,
    animation: `spin-loader ${spinSpeed}s linear infinite`,
  };

  injectStyle(keyframesStyle);

  return (
    <Box
      borderRadius="50%"
      height={typeof size === 'string' ? size : `${size}px`}
      width={typeof size === 'string' ? size : `${size}px`}
      border={`${typeof thick === 'string' ? thick : `${thick}px`} solid ${loaderColor}`}
      borderTop={`${typeof thick === 'string' ? thick : `${thick}px`} solid ${trailColor}`}
      style={Object.assign(style, loaderStyles)}
      {...rest}
    />
  );
};

Loader.propTypes = {
  style: PropTypes.object,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  thick: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  trailColor: PropTypes.string,
  loaderColor: PropTypes.string,
  spinSpeed: PropTypes.number,
};

export default withTheme(Loader);
