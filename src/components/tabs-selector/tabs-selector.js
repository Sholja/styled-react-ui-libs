import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, withTheme } from 'emotion-theming';

import Flex from '../flex/flex';
import Text from '../text/text';

const TabsSelector = ({
  options = [],
  value,
  fieldValue = 'value',
  fieldLabel = 'label',
  onChange,
  itemProps = {},
  style = {},
  wrapperStyle = {},
  textStyle = {},
  ...rest
}) => {
  const theme = useTheme();

  const handleChange = selected => {
    if (onChange) {
      onChange(selected);
    }
  };

  const itemStyles = {
      cursor: 'pointer',
  }

  return (
    <Flex
      {...rest}
      width="auto"
      overflowX="auto"
      style={{ ...{ whiteSpace: 'nowrap' }, ...wrapperStyle }}
    >
      {options.map(item => {
        return (
          <Flex
            key={`tab-selector-item-${item[fieldValue]}`}
            alignItems="center"
            justifyContent="center"
            padding={theme.space.xs}
            borderRadius="2px"
            background={
              value === item[fieldValue] ? theme.colors.primary : theme.colors.transparent
            }
            style={{ ...itemStyles, ...style }}
            onClick={() => handleChange(item[fieldValue])}
            height="32px"
            data-testid={value === item[fieldValue] ? `tab-item-active-${item[fieldValue]}` : `tab-item-${item[fieldValue]}`}
            mr={theme.space.sm}
            {...itemProps}
          >
            <Text
              fontSize={theme.fontSizes.xs}
              color={value === item[fieldValue] ? theme.colors.white : theme.colors.black}
              style={textStyle}
            >
              {item[fieldLabel]}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

TabsSelector.propTypes = {
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fieldValue: PropTypes.string,
  fieldLabel: PropTypes.string,
  onChange: PropTypes.func,
  itemProps: PropTypes.object,
  style: PropTypes.object,
  wrapperStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default withTheme(TabsSelector);
