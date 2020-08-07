import React from 'react';
import PropTypes from 'prop-types';
import SimpleModal from 'simple-react-modal';
import { FaTimes } from 'react-icons/fa';
import { useTheme, withTheme } from 'emotion-theming';

import Box from '../box/box';
import Button from '../button/button';
import Heading from '../heading/heading';
import styles from './modal-styles';

const Modal = ({
  open,
  handleClose,
  title,
  titleComponent,
  children,
  actionButton,
  onActionButtonClick,
  maxWidth = '400px',
  minWidth = ['320px', '400px', '400px'],
  disabled = false,
  modalStyles = {},
  titleStyles = {},
  contentStyles = {},
  hideCloseButton = false,
  blockCloseOnOuterClick = false,
  closeButtonStyles = {},
  ...rest
}) => {
  const theme = useTheme();
  const renderModalTitle = (modalTitle, modalTitleComponent) => {
    if (modalTitleComponent) {
      return modalTitleComponent;
    }

    return modalTitle ? (
      <Heading as="h4" fontWeight={theme.fontWeights.bold}>
        {modalTitle}
      </Heading>
    ) : null;
  };

  return (
    <SimpleModal
      show={open}
      onClose={handleClose}
      style={styles.container}
      containerStyle={{ background: 'transparent' }}
      closeOnOuterClick={disabled || blockCloseOnOuterClick ? false : true}
      {...rest}
    >
      <Box style={Object.assign(styles.modal, modalStyles)} minWidth={minWidth} maxWidth={maxWidth}>
        <Box
          display="flex"
          pl="20px"
          alignItems="center"
          justifyContent="center"
          style={titleStyles}
        >
          {renderModalTitle(title, titleComponent)}
          {!disabled && !hideCloseButton && (
            <FaTimes onClick={handleClose} style={{ ...styles.close, ...closeButtonStyles }} />
          )}
        </Box>
        <Box p="20px" style={contentStyles}>
          {children}
        </Box>
        {actionButton && (
          <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
            <Button variant="primary" btnSize="lg" onClick={onActionButtonClick}>
              {actionButton}
            </Button>
          </Box>
        )}
      </Box>
    </SimpleModal>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  titleComponent: PropTypes.node,
  actionButton: PropTypes.string,
  onActionButtonClick: PropTypes.func,
  maxWidth: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  modalStyles: PropTypes.object,
  titleStyles: PropTypes.object,
  contentStyles: PropTypes.object,
  hideCloseButton: PropTypes.bool,
  blockCloseOnOuterClick: PropTypes.bool,
  closeButtonStyles: PropTypes.object,
};

export default withTheme(Modal);
