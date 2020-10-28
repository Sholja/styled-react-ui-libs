import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, withTheme } from 'emotion-theming';

import Flex from '../flex/flex';
import Image from '../image/image';
import RenderIf from '../render-if/render-if';
import Text from '../text/text';

const ImagesExpand = ({
  items = [],
  maxDisplay = 3,
  width = 32,
  height = 32,
  imageSpace = -12,
  cached = false,
  displayAll = false,
  withBorder = false,
  imageProps = {},
  onImageClick,
  onRestClick,
  ...rest
}) => {
  const theme = useTheme();
  const [forceShowAll, setForceShowAll] = useState(false);
  const displayAllElements = forceShowAll || displayAll || items.length <= maxDisplay;
  const itemsToDisplay = displayAllElements ? items : items.slice(0, maxDisplay);

  const handleRestClick = () => {
    setForceShowAll(true);

    if (onRestClick) {
      onRestClick();
    }
  };

  const handleImageClick = image => {
    if (forceShowAll) {
      setForceShowAll(false);
    }

    if (onImageClick) {
      onImageClick(image);
    }
  };

  return (
    <Flex
      alignItems="center"
      flexWrap="wrap"
      {...rest}
      style={{ cursor: forceShowAll ? 'pointer' : 'unset' }}
    >
      {itemsToDisplay.map((url, index) => {
        return (
          <Image
            key={`image-expander-item-${index}`}
            src={cached ? url : `${url}?${new Date().getTime()}`}
            onClick={() => handleImageClick(url)}
            style={{
              borderRadius: '50%',
              width: `${width}px`,
              height: `${height}px`,
              marginLeft: index > 0 ? `${imageSpace}px` : '0px',
              filter: withBorder ? `drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1))` : 'none',
              cursor: onImageClick ? 'pointer' : 'unset',
            }}
            border={withBorder ? `${theme.borders[2]}${theme.colors.white}` : `${theme.borders[0]}`}
            {...imageProps}
          />
        );
      })}
      <RenderIf show={!displayAllElements}>
        <Text
          onClick={handleRestClick}
          style={{ cursor: 'pointer' }}
          ml={theme.space.xs}
          fontWeight={theme.fontWeights.bold}
          fontSize={theme.fontSizes.sm}
          lineHeight="19px"
          color={theme.colors.greys[2200]}
        >{`+${items.length - maxDisplay}`}</Text>
      </RenderIf>
    </Flex>
  );
};

ImagesExpand.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  maxDisplay: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  imageSpace: PropTypes.number,
  cached: PropTypes.bool,
  displayAll: PropTypes.bool,
  withBorder: PropTypes.bool,
  imageProps: PropTypes.object,
  inImageClick: PropTypes.func,
  onRestClick: PropTypes.func,
};

export default withTheme(ImagesExpand);
