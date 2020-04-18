import React from 'react';
import PropTypes from 'prop-types';
import { FiInbox } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Flex from '../flex/flex';
import Box from '../box/box';
import Heading from '../heading/heading';
import Text from '../text/text';
import Theme from '../../theme/theme';

const EmptyState = ({
  title = 'No Data',
  subtitle = '',
  icon,
  linkText = 'Link',
  linkTo = '',
  ...rest
}) => {
  const Icon = icon;

  return (
    <Flex width="100%" height="40vh" alignItems="center" justifyContent="center" {...rest}>
      <Box textAlign="center" maxWidth={['100%', '50%', '50%', '40%']} px={Theme.space.md}>
        {Icon ? (
          <Icon data-testid="empty-state-icon" fontSize="100px" />
        ) : (
          <FiInbox data-testid="empty-state-icon" fontSize="100px" />
        )}
        <Heading as="h2">{title}</Heading>
        {subtitle && (
          <Text fontSize={Theme.fontSizes.sm} color={Theme.colors.greys[1100]}>
            {subtitle}
          </Text>
        )}
        {linkTo && (
          <Box mt="4px">
            <Link to={linkTo}>{linkText}</Link>
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

export default EmptyState;
