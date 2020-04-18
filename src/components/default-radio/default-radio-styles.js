import Theme from '../../theme/theme';

const styles = {
  input: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
  },
  label: {
    fontWeight: '500',
    fontSize: Theme.fontSizes.sm,
    lineHeight: '25px',
    color: Theme.colors.greys[1000],
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
    display: 'block',
    position: 'relative',
    paddingLeft: '35px',
    marginBottom: '12px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  replacementInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '25px',
    width: '25px',
    borderRadius: '50%',
  },
};

export default styles;
