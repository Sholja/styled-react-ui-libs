import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout } from 'styled-system';
import { withTheme } from 'emotion-theming';
import { themeGet } from '@styled-system/theme-get';

const StyledHyperlink = styled('a')(
  {
    textDecoration: 'none',
  },
  props => ({
    margin: themeGet('space.0')(props),
    fontWeight: themeGet('fontWeights.normal')(props),
    lineHeight: themeGet('lineHeights.normal')(props),
  }),
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

export default withTheme(Hyperlink);
