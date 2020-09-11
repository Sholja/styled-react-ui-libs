import { IoIosCheckmark } from 'react-icons/io';

import Theme from '../../theme/theme';

export const TIMELINE_STATUSES = [
  {
    status: 1,
    backgroundColor: Theme.colors.greys[2200],
    color: Theme.colors.white,
    titleColor: Theme.colors.greys[2200],
    subtitleColor: Theme.colors.greys[2200],
  },
  {
    status: 2,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.white,
    titleColor: Theme.colors.primary,
    subtitleColor: Theme.colors.greys[2200],
  },
  {
    status: 3,
    backgroundColor: Theme.colors.success,
    color: Theme.colors.white,
    titleColor: Theme.colors.black,
    subtitleColor: Theme.colors.greys[2200],
    icon: IoIosCheckmark,
  },
];
