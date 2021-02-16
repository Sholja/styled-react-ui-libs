import React from 'react';
import PropTypes from 'prop-types';

const HideIf = ({ hide = false, children }) => {
    if (hide) {
        return null;
    }

    return <>{children}</>;
};

HideIf.propTypes = {
  hide: PropTypes.bool,
};

export default HideIf;
