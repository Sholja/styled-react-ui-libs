import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  space,
  layout,
  color,
  flexbox,
  background,
  compose,
  position,
  border,
  typography,
} from 'styled-system';

const StyledContainer = styled('div')(
  {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    minWidth: '1px',
    marginTop: '30px',
    margin: 'auto',
    paddingTop: '30px',
    paddingBottom: '30px',
    maxWidth: '1140px',
  },
  compose(space, layout, color, flexbox, background, position, border, typography),
);

StyledContainer.defaultProps = {
  paddingX: ['10px', '20px', '20px', '10px'],
};

const Container = ({ className = '', dataTestId = '', children, ...rest }) => (
  <StyledContainer className={className} {...rest} data-testid={dataTestId}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default Container;
