import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, useTheme } from 'emotion-theming';

import VerticalTimelineItem from './vertical-timeline-item';
import Box from '../box/box';
import RenderIf from '../render-if/render-if';
import { TIMELINE_STATUSES } from './vertical-timeline-constants';

const VerticalTimeline = ({
  items = [],
  onClick,
  timeLineStatuses = TIMELINE_STATUSES,
  itemProps,
  space = '40px',
  separatorColor,
  checkMarkWidth = 24,
  checkMarkHeight = 24,
  iconsStyle = {},
  titleProps = {},
  subtitleProps = {},
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Box {...rest}>
      {items.map((item, index) => (
        <Box key={`vertical-timeline-item-${index}`}>
          <VerticalTimelineItem
            {...item}
            index={index}
            timeLineStatuses={timeLineStatuses}
            handleItemClick={onClick}
            itemProps={itemProps}
            theme={theme}
            checkMarkHeight={checkMarkHeight}
            checkMarkWidth={checkMarkWidth}
            iconsStyle={iconsStyle}
            titleProps={titleProps}
            subtitleProps={subtitleProps}
            item={item}
          />
          <RenderIf show={index !== items.length - 1}>
            <Box
              marginLeft={`${checkMarkWidth / 2}px`}
              marginBottom={`${checkMarkHeight / 2}px`}
              height={space}
              width="auto"
              borderLeft={`${theme.borders[1]}${separatorColor || theme.colors.greys[2200]}`}
            ></Box>
          </RenderIf>
        </Box>
      ))}
    </Box>
  );
};

VerticalTimeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
    }),
  ),
  onClick: PropTypes.func,
  timeLineStatuses: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
      titleColor: PropTypes.string,
      subtitleColor: PropTypes.string,
    }),
  ),
  itemProps: PropTypes.object,
  space: PropTypes.string,
  separatorColor: PropTypes.string,
  checkMarkWidth: PropTypes.number,
  checkMarkHeight: PropTypes.number,
  iconsStyle: PropTypes.object,
  titleProps: PropTypes.object,
  subtitleProps: PropTypes.object,
};

export default withTheme(VerticalTimeline);
