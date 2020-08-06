import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { space, background, compose, position, border } from 'styled-system';
import { withTheme } from 'emotion-theming';

const StyledImage = styled('img')(
  {
    borderRadius: '50%',
  },
  compose(space, background, position, border),
);

const Image = ({ src, alt, width = '32px', height = 'auto', dataTestId, ...rest }) => (
  <StyledImage
    data-testid={dataTestId}
    src={src}
    alt={alt}
    width={width}
    height={height}
    {...rest}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default withTheme(Image);
