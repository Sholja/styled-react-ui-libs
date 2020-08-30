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

import Button from '../button/button';
import styles from './upload-button-style';
import { generateRandomString } from '../../common/helpers';

const StyledUploadButton = styled('input')(
  compose(space, layout, color, flexbox, background, position, border, typography, shadow),
);

const UploadButton = ({
  onChange,
  className = '',
  dataTestId = '',
  inputTestId = '',
  acceptFileTypes = '',
  acceptMultiple = false,
  id,
  children,
  variant = 'primary',
  size = 'md',
  showLoader,
  hideContentWhileLoading,
  loaderSize,
  loaderThickness,
  loaderColor,
  loaderSpinSpeed,
  btnStyle = {},
  ...rest
}) => {
  const elementId = id || generateRandomString(16);

  const handleInputChange = e => {
    const allFiles = e.target.files;

    if (allFiles && allFiles.length > 0 && onChange) {
      const files = acceptMultiple ? allFiles : [allFiles[0]];
      onChange(files);
    }
  };

  const handleButtonClick = () => {
    const element = document.getElementById(`upload-file-${elementId}`);

    if (element) {
      element.click();
    }
  };

  return (
    <Button
      className={className}
      onClick={handleButtonClick}
      variant={variant}
      btnSize={size}
      showLoader={showLoader}
      hideContentWhileLoading={hideContentWhileLoading}
      loaderSize={loaderSize}
      loaderThickness={loaderThickness}
      loaderColor={loaderColor}
      loaderSpinSpeed={loaderSpinSpeed}
      data-testid={dataTestId}
      style={btnStyle}
    >
      {children}
      <StyledUploadButton
        type="file"
        accept={acceptFileTypes}
        style={styles.input}
        multiple={acceptMultiple}
        id={`upload-file-${elementId}`}
        onChange={handleInputChange}
        data-testid={inputTestId}
        {...rest}
      />
    </Button>
  );
};

UploadButton.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  inputTestId: PropTypes.string,
  acceptFileTypes: PropTypes.string,
  acceptMultiple: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.string,
  showLoader: PropTypes.bool,
  hideContentWhileLoading: PropTypes.bool,
  loaderSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loaderThickness: PropTypes.string,
  loaderColor: PropTypes.string,
  loaderSpinSpeed: PropTypes.number,
  btnStyle: PropTypes.object,
};

export default withTheme(UploadButton);
