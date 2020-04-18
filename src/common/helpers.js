export const generateRandomString = length => {
  let result = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789-_';

  for (let i = 0; i < length; i += 1) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return result;
};
