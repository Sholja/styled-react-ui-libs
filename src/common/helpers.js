export const generateRandomString = length => {
  let result = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789-_';

  for (let i = 0; i < length; i += 1) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return result;
};

export const injectStyle = style => {
  const styleElement = document.createElement('style');
  let styleSheet = null;

  document.head.appendChild(styleElement);

  styleSheet = styleElement.sheet;

  styleSheet.insertRule(style, styleSheet.cssRules.length);
};

export const getDatesDifferenceInDays = (startDate, endDate) => {
  const start = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const end = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  return new Date(endDate) <= new Date(startDate) ? 0 : Math.ceil((end - start) / (1000 * 3600 * 24));
};

export const formatDate = date => {
  const dateToFormat = new Date(date);

  return `${dateToFormat.toLocaleString('default', {
    month: 'long',
  })} ${dateToFormat.getDate()}, ${dateToFormat.getFullYear()}`;
};

export default injectStyle;
