import React from 'react';
import { storiesOf, forceReRender } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';

import Modal from './modal';
import Button from '../button/button';
import CodeSnippet from '../code-snippet/code-snippet';
import Heading from '../heading/heading';
import Box from '../box/box';

const dummyCloseFunction = () => {};

const store = new Store({
  open: false,
});

const toggleModal = (isOpen = false) => {
  store.set({ open: isOpen });
  forceReRender();
};

storiesOf('Modal', module)
  .add(
    'Basic',
    () => (
      <>
        <Modal open={true} handleClose={dummyCloseFunction}>
          <Heading as="h4">Some Modal content</Heading>
        </Modal>
        <CodeSnippet>
          {`
            <Modal open={true} 
              handleClose={handleModalClose} 
              title="Modal title" 
              actionButton="Click"
              onActionButtonClick={handleActionButtonClick}
              minWidth={['300px', '600px', '600px']} maxWidth={['500px', '800px', '800px']}
              >
              <Heading as="h4">Some Modal content</Heading>
            </Modal>`}
        </CodeSnippet>
      </>
    ),
    {
      notes: 'Basic Modal.',
    },
  )
  .add(
    'Modal with title',
    () => (
      <Modal open={true} handleClose={dummyCloseFunction} title="Modal title">
        <Heading as="h4">Some Modal content</Heading>
      </Modal>
    ),
    {
      notes: 'Modal displaying title passed to it.',
    },
  )
  .add(
    'Modal with custom title',
    () => (
      <Modal
        open={true}
        handleClose={dummyCloseFunction}
        titleComponent={<Heading as="h3">Custom title</Heading>}
      >
        <Heading as="h4">Some Modal content</Heading>
      </Modal>
    ),
    {
      notes: 'Modal displaying custom title. You can pass any kind of component as a title.',
    },
  )
  .add(
    'Modal with action button',
    () => (
      <Modal
        open={true}
        handleClose={dummyCloseFunction}
        actionButton="Click Me"
        onActionButtonClick={() => alert('Modal action button clicked')}
      >
        <Heading as="h4">Some Modal content</Heading>
      </Modal>
    ),
    {
      notes: 'Modal displaying action button and an action tied to the button.',
    },
  )
  .add(
    'Modal open/close functionality',
    () => (
      <State store={store}>
        <Box>
          <Button variant="primaryOutline" btnSize="lg" onClick={() => toggleModal(true)}>
            Open Modal
          </Button>
          <Modal open={store.state.open} handleClose={() => toggleModal(false)}>
            <Heading as="h4">Some Modal content</Heading>
          </Modal>
        </Box>
      </State>
    ),
    {
      notes: 'Presenting modal open/close functionality.',
    },
  )
  .add(
    'Modal with custom width',
    () => (
      <Modal open={true} handleClose={dummyCloseFunction} minWidth="600px" maxWidth="800px">
        <Heading as="h4">Some Modal content</Heading>
      </Modal>
    ),
    {
      notes: 'Modal with passed minWidth and maxWidth to specify the size of modal.',
    },
  );
