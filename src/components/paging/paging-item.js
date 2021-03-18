import React from 'react';
import PropTypes from 'prop-types';

import Box from '../box/box';
import DefaultTheme from '../../theme/theme';

const PagingItem = ({ active, page, onChange, ...rest }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="32px"
      height="32px"
      borderRadius="4px"
      fontSize={DefaultTheme.fontSizes.xs}
      data-testid={`pager-item-${page}`}
      color={active === page ? DefaultTheme.colors.white : DefaultTheme.colors.greys[1100]}
      style={{
        cursor: active === page ? 'not-allowed' : 'pointer',
        pointerEvents: active === page ? 'none' : 'initial',
        backgroundColor: active === page ? DefaultTheme.colors.primary : 'transparent',
      }}
      onClick={() => onChange(page)}
      {...rest}
    >
      {page}
    </Box>
  );
};

PagingItem.propTypes = {
  active: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PagingItem;
