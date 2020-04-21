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

export default injectStyle;
