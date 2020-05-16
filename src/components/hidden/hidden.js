import React from 'react';
import PropTypes from 'prop-types';

import { useWindowSize } from '../../common/hooks';
import { isHidden } from './hidden-helpers';

const Hidden = ({
  sizeUp,
  sizeDown,
  smDown = false,
  smUp = false,
  mdDown = false,
  mdUp = false,
  lgDown = false,
  lgUp = false,
  xlDown = false,
  xlUp = false,
  children,
}) => {
  const currentSize = useWindowSize();
  const width = currentSize.width;

  return isHidden(
    width,
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
  ) ? null : (
    <>{children}</>
  );
};

Hidden.propTypes = {
  variant: PropTypes.string,
  sizeUp: PropTypes.number,
  sizeDown: PropTypes.number,
};

export default Hidden;
