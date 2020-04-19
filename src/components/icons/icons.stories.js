import { storiesOf } from '@storybook/react';
import React from 'react';

import { ReactIcons } from '../../index';
import { Flex } from '../../index';
import { Hyperlink } from '../../index';

storiesOf('Icons', module).add(
  'Basic',
  () => (
    <>
      <Flex>
        <ReactIcons.FaSearch />
        <ReactIcons.AiFillAccountBook style={{ marginLeft: '10px' }} />
        <ReactIcons.FaAddressCard style={{ marginLeft: '10px' }} />
        <ReactIcons.IoIosAlarm style={{ marginLeft: '10px' }} />
        <ReactIcons.IoIosAdd style={{ marginLeft: '10px' }} />
        <ReactIcons.FaTimesCircle style={{ marginLeft: '10px' }} />
      </Flex>
      <ReactIcons.FaRegHandPointUp style={{ marginLeft: '60px', marginTop: '30px' }} />
      <h3>
        Pack of all kind of icons, list can be found here:{' '}
        <Hyperlink href="https://react-icons.netlify.com/#/" target="_blank">
          React Icons
        </Hyperlink>
      </h3>
    </>
  ),
  {
    notes:
      'To use the icons, import "ReactIcons" from the module and then just add the icon in the project like this: <ReactIcons.FaSearch /> (this is the icon used in the demo).',
  },
);
