import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCheckmark } from 'react-icons/io';

import Flex from '../flex/flex';
import RenderIf from '../render-if/render-if';
import Text from '../text/text';
import DefaultTheme from '../../theme/theme';

const CustomCheckbox = ({
  meta: { touched, error },
  active,
  onClick,
  activeColor = DefaultTheme.colors.greens[1100],
  inactiveColor = DefaultTheme.colors.greys[1300],
  iconColor = DefaultTheme.colors.greens[1000],
  ...rest
}) => (
  <>
    <Flex
      style={{
        cursor: onClick ? 'pointer' : 'initial',
      }}
      borderRadius="50%"
      width="27px"
      height="27px"
      justifyContent="center"
      alignItems="center"
      border={active ? 'none' : `${DefaultTheme.borders[1]} ${DefaultTheme.colors.greys[1300]}`}
      backgroundColor={active ? activeColor : inactiveColor}
      onClick={onClick}
      {...rest}
    >
      <RenderIf show={active}>
        <IoIosCheckmark
          data-testid="custom-checkbox"
          style={{ color: iconColor, fontSize: DefaultTheme.fontSizes.lg }}
        />
      </RenderIf>
    </Flex>
    {touched && error && (
      <Text color={DefaultTheme.colors.oranges[1100]} fontSize={DefaultTheme.fontSizes.xs}>
        {error}
      </Text>
    )}
  </>
);

CustomCheckbox.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  iconColor: PropTypes.string,
};

export default CustomCheckbox;
