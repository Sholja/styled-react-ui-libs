import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { typography, space, color, compose, layout } from 'styled-system';
import { withTheme } from 'emotion-theming';

const StyledHyperlink = styled('a')(
  {
    textDecoration: 'none',
  },
  props => ({
    margin: props.theme.space[0],
    fontWeight: props.theme.fontWeights.normal,
    lineHeight: props.theme.lineHeights.normal,
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
