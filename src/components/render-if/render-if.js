import React from 'react';
import PropTypes from 'prop-types';

const RenderIf = ({ show, children }) => {
  if (show) {
    return <>{children}</>;
  }

  return null;
};

RenderIf.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default RenderIf;
