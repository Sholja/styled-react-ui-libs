import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { useTheme, withTheme } from 'emotion-theming';

import PagingItem from './paging-item';
import Box from '../box/box';
import Flex from '../flex/flex';

const Paging = ({ min, max, page, onChange, ...rest }) => {
  const theme = useTheme();

  const renderPagingItems = () => {
    let maxElements = page + 2 > max ? max : page + 2;
    let minElements = page - 2 < min ? min : page - 2;

    const elements = [];

    for (let i = minElements; i <= maxElements; i++) {
      elements.push(
        <PagingItem key={`paging-item-${i}`} active={page} page={i} onChange={onChange} />,
      );
    }

    return elements;
  };

  return (
    <Box display="inline-block" {...rest}>
      <Flex
        paddingTop="4px"
        paddingBottom="4px"
        boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.08)"
        borderRadius="4px"
        border={`${theme.borders[1]} ${theme.colors.greys[1800]}`}
        backgroundColor={theme.colors.white}
      >
        <Box
          borderRight={
            page === min ? 'none' : `${theme.borders[1]} ${theme.colors.greys[1300]}`
          }
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="32px"
          height="32px"
          style={{
            cursor: min === page ? 'not-allowed' : 'pointer',
            pointerEvents: min === page ? 'none' : 'initial',
          }}
          onClick={() => onChange(page - 1)}
          data-testid="pager-previous"
        >
          <IoMdArrowDropleft style={{ color: theme.colors.greys[1000] }} />
        </Box>
        {renderPagingItems()}
        <Box
          borderLeft={
            page === max ? 'none' : `${theme.borders[1]} ${theme.colors.greys[1300]}`
          }
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="32px"
          height="32px"
          style={{
            cursor: max === page ? 'not-allowed' : 'pointer',
            pointerEvents: max === page ? 'none' : 'initial',
          }}
          onClick={() => onChange(page + 1)}
          data-testid="pager-next"
        >
          <IoMdArrowDropright style={{ color: theme.colors.greys[1000] }} />
        </Box>
      </Flex>
    </Box>
  );
};

Paging.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withTheme(Paging);
