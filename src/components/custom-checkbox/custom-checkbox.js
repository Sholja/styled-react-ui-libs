import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCheckmark } from 'react-icons/io';
import { useTheme } from 'emotion-theming';

import Flex from '../flex/flex';
import RenderIf from '../render-if/render-if';
import Text from '../text/text';
import { withTheme } from 'emotion-theming';

const CustomCheckbox = ({
  meta: { touched, error },
  active,
  onClick,
  activeColor,
  inactiveColor,
  iconColor,
  errorStyles = {},
  ...rest
}) => {
  const theme = useTheme();
  return (
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
        border={active ? 'none' : `${theme.borders[1]} ${theme.colors.greys[1300]}`}
        backgroundColor={
          active
            ? activeColor || theme.colors.greens[1100]
            : inactiveColor || theme.colors.greys[1300]
        }
        onClick={onClick}
        {...rest}
      >
        <RenderIf show={active}>
          <IoIosCheckmark
            data-testid="custom-checkbox"
            style={{ color: iconColor || theme.colors.greens[1000], fontSize: theme.fontSizes.lg }}
          />
        </RenderIf>
      </Flex>
      {touched && error && (
        <Text
          color={theme.colors.oranges[1100] || theme.colors.danger}
          fontSize={theme.fontSizes.xs}
          style={errorStyles}
        >
          {error}
        </Text>
      )}
    </>
  );
};

CustomCheckbox.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  iconColor: PropTypes.string,
  errorStyles: PropTypes.object,
};

export default withTheme(CustomCheckbox);
