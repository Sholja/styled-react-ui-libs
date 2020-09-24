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
  shadow,
} from 'styled-system';
import { withTheme } from 'emotion-theming';

const StyledIframe = styled('iframe')(
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const Iframe = ({ src, title, ...rest }) => <StyledIframe src={src} title={title} {...rest} />;

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};

export default withTheme(Iframe);
