import React from 'react';
import PropTypes from 'prop-types';
import { FiInbox } from 'react-icons/fi';
import { useTheme, withTheme } from 'emotion-theming';

import Flex from '../flex/flex';
import Box from '../box/box';
import Heading from '../heading/heading';
import Hyperlink from '../hyperlink/hyperlink';
import Text from '../text/text';

const EmptyState = ({
  title = 'No Data',
  subtitle = '',
  icon,
  linkText = 'Link',
  linkTo = '',
  ...rest
}) => {
  const theme = useTheme();
  const Icon = icon;

  return (
    <Flex width="100%" height="40vh" alignItems="center" justifyContent="center" {...rest}>
      <Box textAlign="center" maxWidth={['100%', '50%', '50%', '40%']} px={theme.space.md}>
        {Icon ? (
          <Icon data-testid="empty-state-icon" fontSize="100px" />
        ) : (
          <FiInbox data-testid="empty-state-icon" fontSize="100px" />
        )}
        <Heading as="h2">{title}</Heading>
        {subtitle && (
          <Text fontSize={theme.fontSizes.sm} color={theme.colors.greys[1100]}>
            {subtitle}
          </Text>
        )}
        {linkTo && (
          <Box mt="4px">
            <Hyperlink href={linkTo}>{linkText}</Hyperlink>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.element,
};

export default withTheme(EmptyState);
