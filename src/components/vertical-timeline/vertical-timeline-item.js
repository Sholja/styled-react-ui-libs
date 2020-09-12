import React from 'react';
import PropTypes from 'prop-types';

import Box from '../box/box';
import Flex from '../flex/flex';
import RenderIf from '../render-if/render-if';
import Text from '../text/text';
import { getTimelineItemOptions } from './vertical-timeline-helpers';

const VerticalTimelineItem = ({
  index,
  title,
  subtitle,
  status,
  theme = {},
  itemProps = {},
  timeLineStatuses = [],
  handleItemClick,
  checkMarkHeight,
  checkMarkWidth,
  iconsStyle = {},
  titleProps = {},
  subtitleProps = {},
  item,
}) => {
  const options = getTimelineItemOptions(status, timeLineStatuses);

  const handleTimelineItemClick = item => {
    if (handleItemClick) {
      handleItemClick(item);
    }
  };

  return (
    <Box>
      <Flex alignItems="flex-start">
        <Flex
          alignItems="center"
          justifyContent="center"
          width={`${checkMarkWidth}px`}
          height={`${checkMarkHeight}px`}
          borderRadius="50%"
          background={options.backgroundColor}
          position="sticky"
          {...itemProps}
        >
          <RenderIf show={options.icon ? true : false}>
            <options.icon
              style={{ ...{ color: theme.colors.white, fontSize: '22px' }, ...iconsStyle }}
            />
          </RenderIf>
          <RenderIf show={!options.icon}>
            <Text color={options.color} fontSize={theme.fontSizes.xxs} lineHeight="14px">
              {index + 1}
            </Text>
          </RenderIf>
        </Flex>
        <Box
          ml="10px"
          pt={`${checkMarkHeight / 6}px`}
          style={{ cursor: handleItemClick ? 'pointer' : 'initial' }}
          onClick={() => handleTimelineItemClick(item)}
        >
          <RenderIf show={title ? true : false}>
            <Text
              color={options.titleColor}
              fontSize={theme.fontSizes.xs}
              lineHeight="17px"
              fontWeight="600"
              {...titleProps}
            >
              {title}
            </Text>
          </RenderIf>
          <RenderIf show={title ? false : true}>
            <Box height="17px"></Box>
          </RenderIf>
          <RenderIf show={subtitle ? true : false}>
            <Text
              fontSize={theme.fontSizes.xs}
              lineHeight="14px"
              color={options.subtitleColor}
              mt={theme.space.xxs}
              {...subtitleProps}
            >
              {subtitle}
            </Text>
          </RenderIf>
          <RenderIf show={subtitle ? false : true}>
            <Box height="14px" mt={theme.space.xxs}></Box>
          </RenderIf>
        </Box>
      </Flex>
    </Box>
  );
};

VerticalTimelineItem.propTypes = {
  index: PropTypes.number.isRequired,
  handleItemClick: PropTypes.func,
  title: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.node,
  ]),
  subtitle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.node,
  ]),
  status: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  theme: PropTypes.object,
  itemProps: PropTypes.object,
  timeLineStatuses: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
      titleColor: PropTypes.string,
      subtitleColor: PropTypes.string,
    }),
  ),
  checkMarkWidth: PropTypes.number,
  checkMarkHeight: PropTypes.number,
  iconsStyle: PropTypes.object,
  titleProps: PropTypes.object,
  subtitleProps: PropTypes.object,
  item: PropTypes.object,
};

export default VerticalTimelineItem;
