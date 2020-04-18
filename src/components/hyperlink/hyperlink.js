import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout } from 'styled-system';

import DefaultTheme from '../../theme/theme';

const StyledHyperlink = styled('a')(
  {
    margin: DefaultTheme.space[0],
    fontWeight: DefaultTheme.fontWeights.normal,
    lineHeight: DefaultTheme.lineHeights.normal,
    fontFamily: DefaultTheme.fonts.sans,
    textDecoration: 'none',
  },
  compose(typography, space, color, layout),
);

const Hyperlink = ({ children, href = '', onClick, ...rest }) => {
  return (
    <StyledHyperlink href={href} onClick={onClick} {...rest}>
      {children}
    </StyledHyperlink>
  );
};

Hyperlink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Hyperlink;
