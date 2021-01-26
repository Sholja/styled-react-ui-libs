import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import { useTheme, withTheme } from 'emotion-theming';

import Box from '../box/box';
import Button from '../button/button';
import Heading from '../heading/heading';

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
      <Heading as="h4" fontWeight={theme.fontWeights.bold} color={theme.colors.modalTitleColor}>
        {modalTitle}
      </Heading>
    ) : null;
  };

  if (!open) {
    return null;
  }

  return (
    <Box
      position="fixed"
      left="0"
      right="0"
      top="0"
      bottom="0"
      background="rgba(0, 0, 0, 0.9)"
      zIndex="99999"
    >
      <Box
        paddingY="30px"
        paddingX="10px"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          minWidth={minWidth}
          maxWidth={maxWidth}
          background={theme.colors.white}
          borderRadius="3px"
          style={modalStyles}
          maxHeight="100%"
          overflow="auto"
          zIndex="999999"
        >
          <Box
            display="flex"
            pl="20px"
            pt="20px"
            pr="20px"
            alignItems="center"
            justifyContent="center"
            style={{...{ background: theme.colors.modalBackground }, ...titleStyles}}
          >
            {renderModalTitle(title, titleComponent)}
            {!disabled && !hideCloseButton && (
              <FaTimes
                onClick={handleClose}
                style={{
                  ...{ marginLeft: 'auto', cursor: 'pointer', marginTop: theme.space[0], color: theme.colors.modalTitleColor },
                  ...closeButtonStyles,
                }}
              />
            )}
          </Box>
          <Box
            p="20px"
            style={{ ...{ background: theme.colors.modalBackground }, ...contentStyles }}
          >
            {children}
          </Box>
          {actionButton && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={2}
              paddingBottom="20px"
            >
              <Button variant="primary" btnSize="lg" onClick={onActionButtonClick}>
                {actionButton}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
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
