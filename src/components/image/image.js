import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { space, background, compose, position } from 'styled-system';
import { withTheme } from 'emotion-theming';

const StyledImage = styled('img')(
  {
    maxWidth: '100%',
    height: 'auto',
  },
  compose(space, background, position),
);

const Image = ({ src, alt, ...rest }) => <StyledImage src={src} alt={alt} {...rest} />;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default withTheme(Image);
