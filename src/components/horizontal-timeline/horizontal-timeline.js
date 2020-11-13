import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, withTheme } from 'emotion-theming';

import Box from '../box/box';
import Flex from '../flex/flex';
import Text from '../text/text';
import { getDatesDifferenceInDays, formatDate, generateRandomString } from '../../common/helpers';

const HorizontalTimeline = ({
  startDate,
  endDate,
  height = 24,
  background,
  passedColor,
  separatorComponent,
  separatorColor,
  dateProps = {},
  passedProps = {},
  leftProps = {},
  ...rest
}) => {
  const theme = useTheme();
  const [currentDateMargin, setCurrentDateMargin] = useState(0);
  const currentDate = new Date();
  const totalDays = getDatesDifferenceInDays(new Date(startDate), new Date(endDate));
  const passedDays = getDatesDifferenceInDays(new Date(startDate), currentDate);
  const passedPercentage =
    currentDate >= endDate ? 100 : passedDays ? (passedDays / totalDays) * 100 : 0;
  const leftPercentage = 100 - passedPercentage;
  const currentDateId = generateRandomString(16);

  const getTextMargin = () => {
    if (passedDays <= 2) {
      return 0;
    }

    if (getDatesDifferenceInDays(currentDate, new Date(endDate)) <= 2) {
      return `-${currentDateMargin}`;
    }

    return `-${currentDateMargin / 2}`;
  };

  useEffect(() => {
    const text = document.getElementById(currentDateId);

    if (text) {
      setCurrentDateMargin(text.clientWidth);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box {...rest}>
      <Flex alignItems="center">
        <Box>
          <Text
            fontSize={theme.fontSizes.xxs}
            color={theme.colors.black}
            lineHeight="14px"
            mb="5px"
            {...dateProps}
          >
            {formatDate(startDate)}
          </Text>
        </Box>
        <Box ml="auto">
          <Text
            fontSize={theme.fontSizes.xxs}
            color={theme.colors.black}
            lineHeight="14px"
            mb="5px"
            {...dateProps}
          >
            {formatDate(endDate)}
          </Text>
        </Box>
      </Flex>
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="center"
        borderRadius="3px"
        height={`${height}px`}
      >
        <Box
          background={passedColor || theme.colors.greens[1100]}
          width={`${passedPercentage}%`}
          maxWidth="100%"
          height="100%"
          borderTopLeftRadius="3px"
          borderBottomLeftRadius="3px"
          position="relative"
          {...passedProps}
        >
          <>
            {separatorComponent ? (
              separatorComponent
            ) : (
              <>
                <Box
                  width="2px"
                  height={`${height + 9}px`}
                  background={separatorColor || theme.colors.greens[300]}
                  position="absolute"
                  right="0"
                ></Box>
                <Box
                  width="10px"
                  height="10px"
                  borderRadius="50%"
                  background={separatorColor || theme.colors.greens[300]}
                  marginTop="-2px"
                  position="absolute"
                  right="-4px"
                  bottom="-15px"
                ></Box>
              </>
            )}
          </>
        </Box>
        <Box
          background={background || theme.colors.disabled}
          width={`${leftPercentage}%`}
          height="100%"
          borderTopRightRadius="3px"
          borderBottomRightRadius="3px"
          {...leftProps}
        ></Box>
      </Flex>
      <Box>
        <Box ml={`${passedPercentage}%`} mt="20px">
          <Text
            ml={`${getTextMargin()}px`}
            id={currentDateId}
            width="fit-content"
            fontSize={theme.fontSizes.xxs}
            color={theme.colors.black}
            lineHeight="14px"
            {...dateProps}
          >
            {formatDate(currentDate)}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

HorizontalTimeline.propTypes = {
  startDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  endDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  height: PropTypes.number,
  background: PropTypes.string,
  passedColor: PropTypes.string,
  separatorComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]),
  separatorColor: PropTypes.string,
  dateProps: PropTypes.object,
  passedProps: PropTypes.object,
  leftProps: PropTypes.object,
};

export default withTheme(HorizontalTimeline);
