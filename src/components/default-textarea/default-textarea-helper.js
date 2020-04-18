import _ from 'lodash';

export const getArrayOfValues = (value = '') => {
  let result = value.split('\n').join(',');
  result = result.split(',');

  return _.filter(result, item => {
    return item;
  });
};
