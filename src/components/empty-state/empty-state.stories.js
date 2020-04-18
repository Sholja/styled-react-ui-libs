import { storiesOf } from '@storybook/react';
import React from 'react';
import { FaQuestion } from 'react-icons/fa';

import EmptyState from './empty-state';

storiesOf('EmptyState', module)
  .add('Basic', () => <EmptyState />, {
    notes: 'For displaying empty state on a page.',
  })
  .add('With subtitle', () => <EmptyState title="This is a empty state" subtitle="And I'm a subtitle which will explain something" />, {
    notes:
      'You can override default title by passing "title" prop. Also, component is expecting prop "subtitle", which will display text content below title.',
  })
  .add('With passed icon', () => <EmptyState title="This is a empty state" subtitle="And I'm a subtitle which will explain something" icon={FaQuestion} />, {
    notes:
      'You can also pass "icon" prop, which will override default icon in the component.',
  });
