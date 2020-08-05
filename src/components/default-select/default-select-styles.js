import Theme from '../../theme/theme';

const styles = {
  label: {
    fontSize: Theme.fontSizes.xs,
    lineHeight: '17px',
    color: Theme.colors.black,
    marginRight: '4px',
  },
  select: {
    appearance: 'none',
    outline: 0,
    boxShadow: 'none',
    border: '0 !important',
    background: Theme.colors.white,
    backgroundImage: 'none',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '3em',
    lineHeight: 3,
    overflow: 'hidden',
    borderRadius: '.25em',
    flex: 1,
    padding: '0 .5em',
    cursor: 'pointer',
  },
};

export default styles;
