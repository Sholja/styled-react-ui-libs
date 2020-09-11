export const getTimelineItemOptions = (status, timelineStatuses = []) => {
  let options = {};

  for (let i = 0; i < timelineStatuses.length; i++) {
    if (timelineStatuses[i].status === status) {
      options = timelineStatuses[i];
      break;
    }
  }

  return options;
};
