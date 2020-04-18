import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout } from 'styled-system';

import theme from '../../theme/theme';

const StyledUnorderedList = styled('ul')(
  {
    fontWeight: theme.fontWeights.normal,
    lineHeight: theme.lineHeights.normal,
    fontFamily: theme.fonts.sans,
  },
  compose(typography, space, color, layout),
);

const StyledUnorderedListItem = styled('li')(
  {
    fontWeight: theme.fontWeights.normal,
    lineHeight: theme.lineHeights.normal,
    fontFamily: theme.fonts.sans,
  },
  compose(typography, space, color, layout),
);

const UnorderedList = ({ options, itemStyle = {}, onClick, dataTestId, ...rest }) => {
  const handleItemClick = (item, index) => {
    if (onClick) {
      onClick(item, index);
    }
  };

  return (
    <StyledUnorderedList data-testid={dataTestId} {...rest}>
      {options.map((item, index) => (
        <StyledUnorderedListItem
          key={`unordered-list-item-${index}`}
          style={Object.assign(itemStyle, { cursor: onClick ? 'pointer' : 'unset' })}
          onClick={() => handleItemClick(item, index)}
        >
          {item}
        </StyledUnorderedListItem>
      ))}
    </StyledUnorderedList>
  );
};

UnorderedList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemStyle: PropTypes.object,
  onClick: PropTypes.func,
  dataTestId: PropTypes.string,
};

export default UnorderedList;
