import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, withTheme } from 'emotion-theming';

import Box from '../box/box';
import Flex from '../flex/flex';
import RenderIf from '../render-if/render-if';
import Text from '../text/text';

const Tabs = ({
  tabs = [],
  active,
  gap = '30px',
  activeTextColor,
  inactiveTextColor,
  textStyle = {},
  tabItemStyle = {},
  activeElement,
  activeElementBackground = '#DE3640',
  ...rest
}) => {
  const theme = useTheme();

  const onSingleItemClick = (id, onClick) => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <Flex
      {...rest}
      width="auto"
      overflowX="auto"
      style={{
        whiteSpace: 'nowrap',
      }}
    >
      {tabs.map((item, index) => (
        <Box
          paddingRight={index !== tabs.length - 1 ? gap : '0px'}
          onClick={() => onSingleItemClick(item.id, item.onClick)}
          data-testid={`tab-item-${item.id}`}
          style={{ ...{ cursor: 'pointer' }, ...tabItemStyle }}
        >
          <Text
            fontSize={theme.fontSizes.sm}
            fontWeight={theme.fontWeights.bold}
            lineHeight="19px"
            mb="5px"
            color={
              active === item.id
                ? activeTextColor || theme.colors.blacks[100]
                : inactiveTextColor || theme.colors.greys[2200]
            }
            style={textStyle}
          >
            {item.title}
          </Text>
          <RenderIf show={activeElement && active === item.id ? true : false}>
            {activeElement}
          </RenderIf>
          <RenderIf show={!activeElement && active === item.id ? true : false}>
            <Box
              height="4px"
              width="38px"
              background={activeElementBackground}
              borderTopLeftRadius="10px"
              borderTopRightRadius="10px"
              data-testid={`tab-item-active-${item.id}`}
            ></Box>
          </RenderIf>
        </Box>
      ))}
    </Flex>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
  ).isRequired,
  active: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
};

export default withTheme(Tabs);
