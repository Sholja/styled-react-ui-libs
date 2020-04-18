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
      data-testid={dataTestId}
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
};

export default UploadButton;
