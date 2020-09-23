import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import { useTheme, withTheme } from 'emotion-theming';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import Box from '../box/box';
import Flex from '../flex/flex';
import Text from '../text/text';
import RenderIf from '../render-if/render-if';

const ShowMore = ({
  lines = 3,
  showMoreText = 'Show More',
  showLessText = 'Show Less',
  renderMarkdown = false,
  lineHeight = 17,
  showMoreTextProps = {},
  arrowIconStyle = {},
  children,
  ...rest
}) => {
  const theme = useTheme();
  const [showMore, setShowMore] = useState(false);

  return (
    <Box {...rest}>
      <Box id="show-more-content">
        <RenderIf show={!showMore && !renderMarkdown}>
          <Truncate lines={lines}>{children}</Truncate>
        </RenderIf>
        <RenderIf show={showMore && !renderMarkdown}>{children}</RenderIf>
        <RenderIf show={renderMarkdown}>
          <Box
            height={showMore ? 'auto' : `${lines * lineHeight}px`}
            overflow={!showMore ? 'hidden' : 'initial'}
            style={{ lineHeight: !showMore ? `${lineHeight}px` : 'initial' }}
          >
            {children}
          </Box>
        </RenderIf>
      </Box>
      <Flex
        style={{ cursor: 'pointer' }}
        onClick={() => setShowMore(!showMore)}
        alignItems="center"
        pt={theme.space.xs}
      >
        <Text
          ml="auto"
          mr="5px"
          color={theme.colors.primary}
          fontSize={theme.fontSizes.xs}
          lineHeight="17px"
          {...showMoreTextProps}
        >
          {showMore ? showLessText : showMoreText}
        </Text>
        {showMore ? (
          <IoIosArrowUp style={{ ...{ color: theme.colors.primary }, ...arrowIconStyle }} />
        ) : (
          <IoIosArrowDown style={{ ...{ color: theme.colors.primary }, ...arrowIconStyle }} />
        )}
      </Flex>
    </Box>
  );
};

ShowMore.propTypes = {
  lines: PropTypes.number,
  showMoreText: PropTypes.string,
  showLessText: PropTypes.string,
  renderMarkdown: PropTypes.bool,
  lineHeight: PropTypes.number,
  showMoreTextProps: PropTypes.object,
  arrowIconStyle: PropTypes.object,
};

export default withTheme(ShowMore);
