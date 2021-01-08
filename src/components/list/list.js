import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, withTheme } from 'emotion-theming';

import Box from '../box/box';
import Flex from '../flex/flex';

export const List = ({
  options = [],
  type = 'vertical',
  height = '300px',
  width = '150px',
  onClick,
  itemProps = {},
  evenItemStyles = { background: '#f8f8f0' },
  oddItemStyles = { background: '#ffffff' },
  ...rest
}) => {
  const theme = useTheme();

  const defaultItemStyles = onClick ? { cursor: 'pointer' } : {};

  const getItemStyles = index => {
    return index % 2 ? evenItemStyles : oddItemStyles;
  };

  const handleItemClick = (item, index) => {
    if (onClick) {
      onClick(index, item);
    }
  };

  return (
    <Flex
      flexDirection={type === 'vertical' ? 'column' : 'row'}
      overflowX={type === 'horizontal' ? 'auto' : 'unset'}
      overflowY={type === 'vertical' ? 'auto' : 'unset'}
      width={width}
      height={height}
      borderColor={theme.colors.greys[200]}
      borderRadius={theme.radii.sm}
      boxShadow={theme.shadows.box}
      {...rest}
    >
      {options.map(({ id, text, component }, index) => (
        <Box
          key={id || index}
          padding="20px"
          color={theme.colors.black}
          className={index % 2 ? 'list-item-odd' : 'list-item-even'}
          style={{ ...defaultItemStyles, ...getItemStyles(index) }}
          onClick={() => handleItemClick({ id, text, component }, index)}
          {...itemProps}
        >
          {component ? component : text}
        </Box>
      ))}
    </Flex>
  );
};

List.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      text: PropTypes.string,
      component: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]),
    }),
  ),
  type: PropTypes.oneOf(['vertical', 'horizontal']),
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
  itemProps: PropTypes.object,
  evenItemStyles: PropTypes.object,
  oddItemStyles: PropTypes.object,
};

export default withTheme(List);
